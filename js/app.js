// ── App state ──────────────────────────────────────────────
window._activeTheme    = Storage.loadTheme();
window._activeCategory = 'todos';
window._activeTab      = 'habilidades';

// ── Stats ──────────────────────────────────────────────────
function buildStats() {
  return {
    total:     Storage.getTotalPractices(),
    streak:    Storage.getStreak().current,
    explored:  Storage.getExploredCount(),
    nocivos:   NOCIVOS.reduce((s, c) => s + (Storage.getCount(c.id) > 0 ? 1 : 0), 0),
    emociones: EMOCIONES.reduce((s, e) => s + (Storage.getCount(e.id) > 0 ? 1 : 0), 0),
  };
}

// ── Achievements check ─────────────────────────────────────
function checkAchievements() {
  const stats = buildStats();
  ACHIEVEMENTS.forEach(a => {
    if (a.condition(stats)) {
      const isNew = Storage.unlockAchievement(a.id);
      if (isNew) showAchievementToast(a);
    }
  });
}

function showAchievementToast(a) {
  const t = document.getElementById('toast');
  t.innerHTML = `${a.icon} <strong>${a.label}</strong> — ${a.desc}`;
  t.classList.add('show', 'toast--achievement');
  setTimeout(() => { t.classList.remove('show', 'toast--achievement'); }, 3500);
}

// ── Celebration animation ──────────────────────────────────
function celebrate() {
  const overlay = document.createElement('div');
  overlay.className = 'celebrate-overlay';

  const emojis = ['🎉','⭐','✨','🌟','💫','🎊'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('span');
    p.className = 'confetti';
    p.textContent = emojis[i % emojis.length];
    p.style.cssText = `
      left:${Math.random() * 100}%;
      animation-delay:${Math.random() * 0.6}s;
      animation-duration:${0.8 + Math.random() * 0.6}s;
      font-size:${1.2 + Math.random() * 1.2}rem;
    `;
    overlay.appendChild(p);
  }

  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 2000);
}

// ── Card builder ───────────────────────────────────────────
function buildCard(c, isNocivo) {
  const tier  = getTier(c.id);
  const card  = el('div', `card${isNocivo ? ' card--nocivo' : ''}${tier.count > 0 ? ' explored' : ''}`);
  card.style.setProperty('--c', tier.stripeColor || c.color);
  card.style.background  = tier.cardBg;
  card.style.borderColor = tier.border;

  const display     = getConceptDisplay(c, 'card');
  const stripeColor = tier.stripeColor || c.color;
  const tagColor    = tier.tagColor    || c.color;
  const titleColor  = tier.titleColor;
  const glowColor   = tier.glowColor   || c.color;
  const pillHtml    = tier.label
    ? `<span class="card-tier-pill" style="background:${tier.pillBg};color:${tier.pillText}">${tier.label}</span>`
    : '';

  card.innerHTML =
    (isNocivo ? '' : `<div class="card-stripe" style="background:${stripeColor}"></div>`) +
    `<div class="card-glow" style="background:${glowColor}"></div>` +
    pillHtml +
    `<div class="card-display">${display}</div>` +
    `<span class="card-title" style="color:${titleColor}">${c.title}</span>` +
    `<span class="card-tagline" style="color:${tagColor}">${c.tagline}</span>`;

  card.addEventListener('click', () => goDetail(c.id));
  return card;
}

// ── Home ───────────────────────────────────────────────────
function renderHome() {
  const streak  = Storage.getStreak();
  const home    = document.getElementById('view-home');
  home.innerHTML = '';

  // Header
  const header = el('div', 'home-header');
  const left   = el('div', 'header-left');
  left.innerHTML =
    '<div class="header-text">' +
      '<h1 class="home-title"><span class="brand">Forja</span></h1>' +
      '<p class="home-tagline">quien quieres ser</p>' +
    '</div>';
  header.appendChild(left);

  const headerRight = el('div', 'header-right');

  // Logros button
  const logrosBtn = el('button', 'header-icon-btn');
  logrosBtn.title = 'Logros';
  logrosBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`;
  logrosBtn.addEventListener('click', goLogros);
  headerRight.appendChild(logrosBtn);

  // Data button
  const dataBtn = el('button', 'header-icon-btn');
  dataBtn.title = 'Mis datos';
  dataBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;
  dataBtn.addEventListener('click', () => showDataModal(() => {
    window._activeTheme = Storage.loadTheme();
    renderHome();
  }));
  headerRight.appendChild(dataBtn);

  headerRight.appendChild(makeThemePicker(onThemeChange));
  header.appendChild(headerRight);
  home.appendChild(header);

  // Summary card
  const total = Storage.getTotalPractices();
  if (total > 0 || streak.current > 0) {
    const summary = el('div', 'summary-card');
    summary.innerHTML =
      `<div class="summary-card-top">` +
        `<span class="summary-label">Tu progreso</span>` +
      `</div>` +
      `<div class="summary-card-body">` +
        `<div class="summary-display">🔥</div>` +
        `<div class="summary-info">` +
          `<span class="summary-info-title">${streak.current}</span>` +
          `<span class="summary-info-tag">racha actual</span>` +
        `</div>` +
        `<button class="summary-btn">Ver historial →</button>` +
      `</div>`;
    summary.querySelector('.summary-btn').addEventListener('click', goGlobalHistory);
    home.appendChild(summary);
  }

  // Reto diario — solo aparece si el concepto propuesto no fue practicado hoy
  const reto = getDailyChallenge();
  const todayLocale = new Date().toLocaleDateString('es-CL');
  if (reto && !(Storage.getHistory()[reto.id] || []).some(s => s.date === todayLocale)) {
    const retoEl = el('div', 'reto-wrap');
    const display = getConceptDisplay(reto, 'card');
    retoEl.innerHTML =
      `<div class="reto-card">` +
        `<div class="reto-card-top">` +
          `<span class="reto-label">Reto de hoy</span>` +
        `</div>` +
        `<div class="reto-card-body">` +
          `<div class="reto-display">${display}</div>` +
          `<div class="reto-info">` +
            `<span class="reto-title">${reto.title}</span>` +
            `<span class="reto-tag">${reto.tagline}</span>` +
          `</div>` +
          `<button class="reto-btn">Practicar →</button>` +
        `</div>` +
      `</div>`;
    retoEl.querySelector('.reto-btn').addEventListener('click', () => goDetail(reto.id));
    home.appendChild(retoEl);
  }

  // Tabs
  const tabBar = el('div', 'tab-bar');
  const tab1 = el('button', `tab-btn${window._activeTab === 'habilidades' ? ' active' : ''}`, 'Quién quiero ser');
  const tab2 = el('button', `tab-btn${window._activeTab === 'nocivos'     ? ' active' : ''}`, 'Qué quiero evitar');
  const tab3 = el('button', `tab-btn${window._activeTab === 'emociones'   ? ' active' : ''}`, 'Cuando me siento...');
  tab1.addEventListener('click', () => { window._activeTab = 'habilidades'; renderHome(); });
  tab2.addEventListener('click', () => { window._activeTab = 'nocivos';     renderHome(); });
  tab3.addEventListener('click', () => { window._activeTab = 'emociones';   renderHome(); });
  tabBar.appendChild(tab1); tabBar.appendChild(tab2); tabBar.appendChild(tab3);
  home.appendChild(tabBar);

  // Tab: Habilidades
  if (window._activeTab === 'habilidades') {
    const catSection = el('div', 'filter-section');
    const catBar     = el('div', 'cat-bar');
    CATEGORIES.forEach(cat => {
      const btn = el('button',
        `cat-btn${window._activeCategory === cat.id ? ' active' : ''}`,
        cat.label);
      btn.addEventListener('click', () => { window._activeCategory = cat.id; renderHome(); });
      catBar.appendChild(btn);
    });
    catSection.appendChild(catBar);
    home.appendChild(catSection);

    const filtered = window._activeCategory === 'todos'
      ? CONCEPTS
      : CONCEPTS.filter(c => c.category === window._activeCategory);
    const grid = el('div', 'grid');
    filtered.forEach(c => grid.appendChild(buildCard(c, false)));
    home.appendChild(grid);
  }

  // Tab: Qué evitar
  if (window._activeTab === 'nocivos') {
    const grid = el('div', 'grid');
    NOCIVOS.forEach(c => grid.appendChild(buildCard(c, true)));
    home.appendChild(grid);
  }

  // Tab: Cuando me siento...
  if (window._activeTab === 'emociones') {
    const grid = el('div', 'grid');
    EMOCIONES.forEach(e => {
      const card = el('div', 'card card--emocion');
      const display = getConceptDisplay(e, 'card');
      card.innerHTML =
        '<div class="card-glow" style="background:#6366F1"></div>' +
        `<div class="card-display">${display}</div>` +
        `<span class="card-title">${e.title}</span>` +
        `<span class="card-tagline" style="color:#6366F1">${e.tagline}</span>`;
      card.addEventListener('click', () => goEmotionDetail(e.id));
      grid.appendChild(card);
    });
    home.appendChild(grid);
  }
}

// ── Detail ─────────────────────────────────────────────────
function renderDetail(id) {
  const c        = CONCEPTS.find(x => x.id === id) || NOCIVOS.find(x => x.id === id);
  const isNocivo = !CONCEPTS.find(x => x.id === id);
  const view     = document.getElementById('view-detail');
  const tier     = getTier(c.id);
  const heroBg   = tier.heroBg;

  view.style.background = heroBg;

  const display    = getConceptDisplay(c, 'detail');
  const exHtml     = c.examples.map(ex =>
    `<div class="example-item">` +
      `<span class="example-icon">${ex.icon}</span>` +
      `<span class="example-text">${ex.text}</span>` +
    `</div>`
  ).join('');

  const stripe  = tier.stripeColor || c.color;
  const titleC  = tier.titleColor;
  const tagC    = tier.tagColor || c.color;

  view.innerHTML =
    `<nav class="detail-nav" style="background:${heroBg}">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
      `<div class="detail-nav-right" id="detail-nav-right"></div>` +
    `</nav>` +
    `<div class="detail-hero${isNocivo ? ' detail-hero--nocivo' : ''}" style="background:${heroBg}">` +
      `<span class="detail-stripe" style="background:${stripe}"></span>` +
      `<div class="detail-glow"></div>` +
      `<div class="detail-display-wrap">${display}</div>` +
      `<h1 class="detail-title" style="color:${titleC}">${c.title}</h1>` +
      `<p class="detail-tagline" style="color:${tagC}">${c.tagline}</p>` +
      `<div id="detail-tier" class="detail-tier">${getTierBadgeHtml(c.id)}</div>` +
    `</div>` +
    `<div class="detail-body" id="detail-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body  = document.getElementById('detail-body');
  const why   = isNocivo ? '¿Por qué nos frena?'    : '¿Por qué importa?';
  const where = isNocivo ? '¿Cuándo aparece?'         : 'Dónde la usas en tu vida';

  body.appendChild(makeSection(null, why,   `<p class="why-text">${c.why}</p>`, true));
  body.appendChild(makeSection(null, where, exHtml, false));
  body.appendChild(makeSection(null, `Ejercicio: ${c.exercise.title}`, makeExercise(c), false));

  if (Storage.getCount(c.id) > 0) {
    const historyContent = document.createElement('div');
    historyContent.appendChild(makeHistoryInline(c.id, c.color));
    const historySection = makeSection(null, 'Mis prácticas', historyContent, false);
    historySection.id = 'concept-history';
    body.appendChild(historySection);
  }
}

// ── Emotion detail ─────────────────────────────────────────
function renderEmotionDetail(id) {
  const e    = EMOCIONES.find(x => x.id === id);
  const view = document.getElementById('view-detail');
  const COLOR = '#6366F1';
  view.style.background = '#F5F3FF';

  const display = getConceptDisplay(e, 'detail');

  view.innerHTML =
    `<nav class="detail-nav" style="background:#F5F3FF">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
      `<div class="detail-nav-right" id="detail-nav-right"></div>` +
    `</nav>` +
    `<div class="detail-hero" style="background:#F5F3FF">` +
      `<span class="detail-stripe" style="background:${COLOR}"></span>` +
      `<div class="detail-glow"></div>` +
      `<div class="detail-display-wrap">${display}</div>` +
      `<h1 class="detail-title">${e.title}</h1>` +
      `<p class="detail-tagline" style="color:${COLOR}">${e.tagline}</p>` +
    `</div>` +
    `<div class="detail-body" id="detail-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body = document.getElementById('detail-body');
  e.tools.forEach((tool, i) => {
    const stepsHtml = tool.steps.map((s, j) =>
      `<div class="emo-step">` +
        `<span class="emo-step-num">${j + 1}</span>` +
        `<span class="emo-step-text">${s}</span>` +
      `</div>`
    ).join('');
    const wrap = document.createElement('div');
    wrap.className = 'emo-tool';
    wrap.innerHTML = stepsHtml;
    body.appendChild(makeSection(null, tool.title, wrap, i === 0));
  });

  // Marcar como usada para achievements
  Storage.saveSession(e.id, {});
  checkAchievements();
}

// ── Global history ─────────────────────────────────────────
function renderGlobalHistory() {
  const view = document.getElementById('view-detail');
  view.style.background = 'var(--bg-app)';

  const history = Storage.getHistory();
  const allConcepts = [...CONCEPTS, ...NOCIVOS, ...EMOCIONES];

  // Aplanar y ordenar por fecha desc
  const entries = [];
  Object.entries(history).forEach(([conceptId, sessions]) => {
    const c = allConcepts.find(x => x.id === conceptId);
    if (!c) return;
    sessions.forEach(s => entries.push({ c, s }));
  });
  entries.sort((a, b) => {
    const [da, ma, ya] = a.s.date.split('-').map(Number);
    const [db, mb, yb] = b.s.date.split('-').map(Number);
    return new Date(yb, mb-1, db) - new Date(ya, ma-1, da);
  });

  const streak = Storage.getStreak();

  view.innerHTML =
    `<nav class="detail-nav">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
    `</nav>` +
    `<div class="detail-hero" style="background:var(--bg-app);padding-bottom:16px">` +
      `<span class="detail-stripe" style="background:#6366F1"></span>` +
      `<h1 class="detail-title" style="padding-top:70px">Historial global</h1>` +
      `<p class="detail-tagline">${Storage.getTotalPractices()} prácticas en total</p>` +
    `</div>` +
    `<div class="detail-body" id="gh-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body = document.getElementById('gh-body');

  // Stats rápidas
  const statsEl = el('div', 'gh-stats');
  statsEl.innerHTML =
    `<div class="gh-stat"><span class="gh-stat-n">${Storage.getTotalPractices()}</span><span class="gh-stat-l">Prácticas</span></div>` +
    `<div class="gh-stat"><span class="gh-stat-n">${Storage.getExploredCount()}</span><span class="gh-stat-l">Conceptos</span></div>` +
    `<div class="gh-stat"><span class="gh-stat-n">${streak.current}🔥</span><span class="gh-stat-l">Racha actual</span></div>` +
    `<div class="gh-stat"><span class="gh-stat-n">${streak.max}</span><span class="gh-stat-l">Racha máxima</span></div>`;
  body.appendChild(statsEl);

  if (!entries.length) {
    body.appendChild(el('p', 'history-empty', 'Aún no hay prácticas registradas.'));
    return;
  }

  const list = el('div', 'gh-list');
  entries.forEach(({ c, s }) => {
    const item = el('div', 'gh-item');
    const emoji = window._activeTheme === 'animals'
      ? (ANIMAL_MAP[c.id] || c.emoji)
      : c.emoji;
    const inputs = Object.values(s.inputs || {}).filter(v => v?.a || (typeof v === 'string' && v));
    const preview = inputs.length
      ? (inputs[0].a || inputs[0]).slice(0, 60)
      : '';
    item.innerHTML =
      `<span class="gh-emoji">${emoji}</span>` +
      `<div class="gh-info">` +
        `<span class="gh-concept">${c.title}</span>` +
        (preview ? `<span class="gh-preview">${preview}${preview.length >= 60 ? '…' : ''}</span>` : '') +
      `</div>` +
      `<span class="gh-date">${s.date}</span>`;
    item.addEventListener('click', () => goDetail(c.id));
    list.appendChild(item);
  });
  body.appendChild(list);
}

// ── Logros ─────────────────────────────────────────────────
function renderLogros() {
  const view = document.getElementById('view-detail');
  view.style.background = 'var(--bg-app)';

  const unlocked = Storage.getUnlocked();

  view.innerHTML =
    `<nav class="detail-nav">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
    `</nav>` +
    `<div class="detail-hero" style="background:var(--bg-app);padding-bottom:16px">` +
      `<span class="detail-stripe" style="background:#F59E0B"></span>` +
      `<h1 class="detail-title" style="padding-top:70px">Logros</h1>` +
      `<p class="detail-tagline">${unlocked.length} / ${ACHIEVEMENTS.length} desbloqueados</p>` +
    `</div>` +
    `<div class="detail-body" id="logros-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body = document.getElementById('logros-body');
  const list = el('div', 'logros-list');

  ACHIEVEMENTS.forEach(a => {
    const isUnlocked = unlocked.includes(a.id);
    const item = el('div', `logro-item${isUnlocked ? ' logro-item--unlocked' : ''}`);
    item.innerHTML =
      `<span class="logro-icon">${isUnlocked ? a.icon : '🔒'}</span>` +
      `<div class="logro-info">` +
        `<span class="logro-label">${a.label}</span>` +
        `<span class="logro-desc">${a.desc}</span>` +
      `</div>`;
    list.appendChild(item);
  });

  body.appendChild(list);
}

// ── Theme change ───────────────────────────────────────────
function onThemeChange(themeId) {
  window._activeTheme = themeId;
  Storage.saveTheme(themeId);
  renderHome();
}

// ── Navigation ─────────────────────────────────────────────
function showDetailView(renderFn) {
  renderFn();
  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').classList.add('active');
  window.scrollTo(0, 0);
}

function showHomeView() {
  document.getElementById('view-detail').classList.remove('active');
  document.getElementById('view-home').style.display = '';
  renderHome();
  window.scrollTo(0, 0);
}

function goDetail(id)        { showDetailView(() => renderDetail(id)); }
function goHome()            { showHomeView(); }
function goEmotionDetail(id) { showDetailView(() => renderEmotionDetail(id)); }
function goGlobalHistory()   { showDetailView(renderGlobalHistory); }
function goLogros()          { showDetailView(renderLogros); }

// ── Image error handling ───────────────────────────────────
document.addEventListener('error', (e) => {
  const img = e.target;
  if (img.tagName === 'IMG' && img.classList.contains('concept-img')) {
    img.style.display = 'none';
    const sibling = img.nextElementSibling;
    if (sibling) sibling.style.display = 'inline';
  }
}, true);

// ── Init ───────────────────────────────────────────────────
renderHome();
preloadAllImages();
