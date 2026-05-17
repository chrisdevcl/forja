// ── App state ──────────────────────────────────────────────
window._activeTheme    = Storage.loadTheme();
window._activeCategory = 'todos';

// ── Init ───────────────────────────────────────────────────
renderHome();

// ── Home ───────────────────────────────────────────────────
function renderHome() {
  const history     = Storage.getHistory();
  const done        = Object.keys(history).filter(id => history[id].length > 0).length;
  const pct         = Math.round((done / CONCEPTS.length) * 100);
  const home        = document.getElementById('view-home');
  home.innerHTML    = '';

  // Header
  const header = el('div', 'home-header');
  const left   = el('div', 'header-left');
  left.innerHTML =
    `<div class="header-text">` +
      `<h1 class="home-title"><span class="brand">Forja</span></h1>` +
      `<p class="home-tagline">quien quieres ser</p>` +
    `</div>`;
  header.appendChild(left);
  header.appendChild(makeThemePicker(onThemeChange));
  home.appendChild(header);

  // Progress
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

  // Category filter
  const catSection = el('div', 'filter-section');
  const catBar     = el('div', 'cat-bar');
  CATEGORIES.forEach(cat => {
    const btn = el('button',
      `cat-btn${window._activeCategory === cat.id ? ' active' : ''}`);
    btn.innerHTML = `${getCategoryIcon(cat.id)}<span>${cat.label}</span>`;
    btn.addEventListener('click', () => {
      window._activeCategory = cat.id;
      renderHome();
    });
    catBar.appendChild(btn);
  });
  catSection.appendChild(catBar);
  home.appendChild(catSection);

  // Grid
  const filtered = window._activeCategory === 'todos'
    ? CONCEPTS
    : CONCEPTS.filter(c => c.category === window._activeCategory);

  const grid = el('div', 'grid');
  filtered.forEach(c => {
    const count = Storage.getCount(c.id);
    const card  = el('div', `card${count > 0 ? ' explored' : ''}`);
    card.style.setProperty('--c', c.color);

    const display = getConceptDisplay(c, 'card');

    card.innerHTML =
      `<div class="card-stripe"></div>` +
      `<div class="card-glow"></div>` +
      (count > 0 ? `<span class="card-badge">${count}×</span>` : '') +
      `<div class="card-display">${display}</div>` +
      `<span class="card-title">${c.title}</span>` +
      `<span class="card-tagline">${c.tagline}</span>`;

    card.addEventListener('click', () => goDetail(c.id));
    grid.appendChild(card);
  });
  home.appendChild(grid);
}

// ── Detail ─────────────────────────────────────────────────
function renderDetail(id) {
  const c    = CONCEPTS.find(x => x.id === id);
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
    `<div class="detail-hero">` +
      `<span class="detail-stripe"></span>` +
      `<div class="detail-glow"></div>` +
      `<div class="detail-display-wrap">${display}</div>` +
      `<h1 class="detail-title">${c.title}</h1>` +
      `<p class="detail-tagline">${c.tagline}</p>` +
    `</div>` +
    `<div class="detail-body" id="detail-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body = document.getElementById('detail-body');
  body.appendChild(makeSection('💡', '¿Por qué importa?',        `<p class="why-text">${c.why}</p>`, true));
  body.appendChild(makeSection('📍', 'Dónde la usas en tu vida', exHtml, false));
  body.appendChild(makeSection('🎯', `Ejercicio: ${c.exercise.title}`, makeExercise(c), false));
  if (Storage.getCount(c.id) > 0) body.appendChild(makeHistoryInline(c.id, c.color));
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
// Delegado con capture:true porque el evento 'error' no hace bubbling.
// Muestra el emoji de fallback cuando una imagen no carga.
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
