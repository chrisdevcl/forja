// ── App state ──────────────────────────────────────────────
window._activeTheme    = Storage.loadTheme();
window._activeCategory = 'todos';
window._activeTab      = 'habilidades'; // 'habilidades' | 'nocivos'

// ── Card builder ───────────────────────────────────────────
function buildCard(c, isNocivo) {
  const count = Storage.getCount(c.id);
  const card  = el('div', `card${isNocivo ? ' card--nocivo' : ''}${count > 0 ? ' explored' : ''}`);
  card.style.setProperty('--c', c.color);

  const display = getConceptDisplay(c, 'card');

  card.innerHTML =
    (isNocivo ? '' : '<div class="card-stripe"></div>') +
    '<div class="card-glow"></div>' +
    (count > 0 ? `<span class="card-badge">${count}×</span>` : '') +
    `<div class="card-display">${display}</div>` +
    `<span class="card-title">${c.title}</span>` +
    `<span class="card-tagline">${c.tagline}</span>`;

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

  tab1.addEventListener('click', () => { window._activeTab = 'habilidades'; renderHome(); });
  tab2.addEventListener('click', () => { window._activeTab = 'nocivos';     renderHome(); });

  tabBar.appendChild(tab1);
  tabBar.appendChild(tab2);
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

  view.innerHTML =
    `<nav class="detail-nav">` +
      `<button class="back-btn" id="back-btn">← Volver</button>` +
    `</nav>` +
    `<div class="detail-hero${isNocivo ? ' detail-hero--nocivo' : ''}">` +
      `<span class="detail-stripe"></span>` +
      `<div class="detail-glow"></div>` +
      `<div class="detail-display-wrap">${display}</div>` +
      `<h1 class="detail-title">${c.title}</h1>` +
      `<p class="detail-tagline">${c.tagline}</p>` +
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

// ── Theme change ───────────────────────────────────────────
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
