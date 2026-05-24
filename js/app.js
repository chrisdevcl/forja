// ── App state ──────────────────────────────────────────────
window._activeTheme    = Storage.loadTheme();
window._activeCategory = 'todos';
window._activeTab      = 'habilidades'; // 'habilidades' | 'nocivos'

// ── Card builder ───────────────────────────────────────────
function buildCard(c, isNocivo) {
  const tier  = getTier(c.id);
  const card  = el('div', `card${isNocivo ? ' card--nocivo' : ''}${tier.count > 0 ? ' explored' : ''}`);
  card.style.setProperty('--c', tier.stripeColor || c.color);
  card.style.background   = tier.cardBg;
  card.style.borderColor  = tier.border;

  const display = getConceptDisplay(c, 'card');

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
  const history = Storage.getHistory();
  const done    = Object.keys(history).filter(id => history[id].length > 0).length;
  const pct     = Math.round((done / CONCEPTS.length) * 100);
  const home    = document.getElementById('view-home');
  home.innerHTML = '';

  // ── Header ─────────────────────────────────────────────
  const header = el('div', 'home-header');
  const left   = el('div', 'header-left');
  left.innerHTML =
    '<div class="header-text">' +
      '<h1 class="home-title"><span class="brand">Forja</span></h1>' +
      '<p class="home-tagline">quien quieres ser</p>' +
    '</div>';
  header.appendChild(left);
  header.appendChild(makeThemePicker(onThemeChange));
  home.appendChild(header);

  // ── Progress ────────────────────────────────────────────
  if (done > 0) {
    const pw = el('div', 'progress-wrap');
    pw.innerHTML = `
      <div>
        <div class="progress-meta">
          <span class="progress-label">✦ Habilidades forjadas</span>
          <span class="progress-count">${done} / ${CONCEPTS.length}</span>
        </div>
        <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
      </div>`;
    home.appendChild(pw);
    requestAnimationFrame(() => {
      const f = document.getElementById('progress-fill');
      if (f) f.style.width = pct + '%';
    });
  }

  // ── Tabs ────────────────────────────────────────────────
  const tabBar = el('div', 'tab-bar');

  const tab1 = el('button', `tab-btn${window._activeTab === 'habilidades' ? ' active' : ''}`, 'Quién quiero ser');
  const tab2 = el('button', `tab-btn tab-btn--nocivo${window._activeTab === 'nocivos' ? ' active' : ''}`, 'Qué quiero evitar');
  const tab3 = el('button', `tab-btn tab-btn--emocion${window._activeTab === 'emociones' ? ' active' : ''}`, 'Cuando me siento...');

  tab1.addEventListener('click', () => { window._activeTab = 'habilidades'; renderHome(); });
  tab2.addEventListener('click', () => { window._activeTab = 'nocivos';     renderHome(); });
  tab3.addEventListener('click', () => { window._activeTab = 'emociones';   renderHome(); });

  tabBar.appendChild(tab1);
  tabBar.appendChild(tab2);
  tabBar.appendChild(tab3);
  home.appendChild(tabBar);

  // ── Tab: Habilidades ─────────────────────────────────────
  if (window._activeTab === 'habilidades') {
    const catSection = el('div', 'filter-section');
    const catBar     = el('div', 'cat-bar');
    CATEGORIES.forEach(cat => {
      const btn = el('button',
        `cat-btn${window._activeCategory === cat.id ? ' active' : ''}`,
        cat.label);
      btn.addEventListener('click', () => {
        window._activeCategory = cat.id;
        renderHome();
      });
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

  // ── Tab: Qué evitar ──────────────────────────────────────
  if (window._activeTab === 'nocivos') {
    const grid = el('div', 'grid');
    NOCIVOS.forEach(c => grid.appendChild(buildCard(c, true)));
    home.appendChild(grid);
  }

  // ── Tab: Cuando me siento... ─────────────────────────────
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

  const view = document.getElementById('view-detail');
  view.style.setProperty('--c', c.color);

  const display = getConceptDisplay(c, 'detail');
  const exHtml  = c.examples.map(ex =>
    `<div class="example-item">` +
      `<span class="example-icon">${ex.icon}</span>` +
      `<span class="example-text">${ex.text}</span>` +
    `</div>`
  ).join('');

  const tier       = getTier(c.id);
  const heroBg     = tier.heroBg;
  const titleColor = tier.titleColor;
  const tagColor   = tier.tagColor || c.color;
  const stripe     = tier.stripeColor || c.color;

  // Fondo general del detalle (igual que la tarjeta)
  view.style.background = heroBg;

  view.innerHTML =
    `<nav class="detail-nav" style="background:${heroBg}">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
    `</nav>` +
    `<div class="detail-hero${isNocivo ? ' detail-hero--nocivo' : ''}" style="background:${heroBg}">` +
      `<span class="detail-stripe" style="background:${stripe}"></span>` +
      `<div class="detail-glow"></div>` +
      `<div class="detail-display-wrap">${display}</div>` +
      `<h1 class="detail-title" style="color:${titleColor}">${c.title}</h1>` +
      `<p class="detail-tagline" style="color:${tagColor}">${c.tagline}</p>` +
      `<div id="detail-tier" class="detail-tier">${getTierBadgeHtml(c.id)}</div>` +
    `</div>` +
    `<div class="detail-body" id="detail-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body   = document.getElementById('detail-body');
  const why    = isNocivo ? '¿Por qué nos frena?' : '¿Por qué importa?';
  const where  = isNocivo ? '¿Cuándo aparece?' : 'Dónde la usas en tu vida';

  body.appendChild(makeSection(null, why,   `<p class="why-text">${c.why}</p>`, true));
  body.appendChild(makeSection(null, where, exHtml, false));
  body.appendChild(makeSection(null, `Ejercicio: ${c.exercise.title}`, makeExercise(c), false));

  const historyContainer = document.createElement('div');
  historyContainer.id = 'concept-history';
  if (Storage.getCount(c.id) > 0) historyContainer.appendChild(makeHistoryInline(c.id, c.color));
  body.appendChild(historyContainer);
}

// ── Emotion detail ─────────────────────────────────────────
function renderEmotionDetail(id) {
  const e    = EMOCIONES.find(x => x.id === id);
  const view = document.getElementById('view-detail');

  const EMOCION_COLOR = '#6366F1';
  view.style.background = '#F5F3FF';

  const display = getConceptDisplay(e, 'detail');

  view.innerHTML =
    `<nav class="detail-nav" style="background:#F5F3FF">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
    `</nav>` +
    `<div class="detail-hero" style="background:#F5F3FF">` +
      `<span class="detail-stripe" style="background:${EMOCION_COLOR}"></span>` +
      `<div class="detail-glow"></div>` +
      `<div class="detail-display-wrap">${display}</div>` +
      `<h1 class="detail-title" style="color:#1A1A2E">${e.title}</h1>` +
      `<p class="detail-tagline" style="color:${EMOCION_COLOR}">${e.tagline}</p>` +
    `</div>` +
    `<div class="detail-body" id="detail-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body = document.getElementById('detail-body');

  // ¿Qué es esto?
  body.appendChild(makeSection(null, '¿Qué es esto?', `<p class="why-text">${e.what}</p>`, true));

  // Herramientas
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
}

function goEmotionDetail(id) {
  renderEmotionDetail(id);
  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').classList.add('active');
  window.scrollTo(0, 0);
}
function onThemeChange(themeId) {
  window._activeTheme = themeId;
  Storage.saveTheme(themeId);
  renderHome();
}

// ── Navigation ─────────────────────────────────────────────
function goDetail(id) {
  renderDetail(id);
  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  document.getElementById('view-detail').classList.remove('active');
  document.getElementById('view-home').style.display = '';
  renderHome();
  window.scrollTo(0, 0);
}

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
