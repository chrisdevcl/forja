const explored = new Set();
let toastTimer;

const EVAL_OPTIONS = [
  { emoji: '😅', label: 'Fue difícil,\npero lo intenté', score: 1 },
  { emoji: '🙂', label: 'Más o menos,\nvoy mejorando',   score: 2 },
  { emoji: '🌟', label: '¡Me salió\nbien!',              score: 3 },
];

const EVAL_RESULTS = {
  1: { emoji: '💪', text: '¡Lo intentaste y eso es lo que más importa!', sub: 'Sigue practicando, cada vez te saldrá mejor.' },
  2: { emoji: '🚀', text: '¡Vas por buen camino!',                        sub: 'Con un poco más de práctica lo dominarás.' },
  3: { emoji: '🏆', text: '¡Increíble, lo forjaste!',                     sub: 'Sigue así, esta habilidad ya es tuya.' },
};

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

function makeSection(icon, title, innerHtml) {
  const sec   = el('div', 'section');
  const body  = el('div', 'section-body');
  const arrow = el('span', 'section-arrow', '▼');
  const hdr   = el('div', 'section-header');

  body.innerHTML = innerHtml;
  hdr.innerHTML  = `<span class="section-icon">${icon}</span><span class="section-title">${title}</span>`;
  hdr.appendChild(arrow);

  hdr.addEventListener('click', () => {
    const open = body.classList.toggle('open');
    arrow.classList.toggle('open', open);
  });

  sec.appendChild(hdr);
  sec.appendChild(body);
  return sec;
}

function makeEval(concept) {
  const isDone = explored.has(concept.id);
  const wrap   = el('div', 'eval-wrap');

  if (isDone) {
    wrap.innerHTML = `
      <div class="eval-result">
        <span class="eval-result-emoji">✅</span>
        <p class="eval-result-text">Ya practicaste ${concept.title}</p>
        <p class="eval-result-sub">¡Sigue así!</p>
      </div>`;
    return wrap;
  }

  wrap.innerHTML = `<p class="eval-question">¿Cómo te fue practicando <strong>${concept.title}</strong>?</p>`;

  const optionsEl = el('div', 'eval-options');

  EVAL_OPTIONS.forEach(opt => {
    const btn = el('button', 'eval-btn');
    btn.innerHTML = `<span class="eval-emoji">${opt.emoji}</span>${opt.label.replace('\n', '<br>')}`;

    btn.addEventListener('click', () => {
      explored.add(concept.id);
      const result = EVAL_RESULTS[opt.score];
      wrap.innerHTML = `
        <div class="eval-result">
          <span class="eval-result-emoji">${result.emoji}</span>
          <p class="eval-result-text">${result.text}</p>
          <p class="eval-result-sub">${result.sub}</p>
        </div>`;
      showToast(`🔥 ¡${concept.title} forjada!`);
    });

    optionsEl.appendChild(btn);
  });

  wrap.appendChild(optionsEl);
  return wrap;
}

function renderHome() {
  const pct  = Math.round((explored.size / CONCEPTS.length) * 100);
  const home = document.getElementById('view-home');

  home.innerHTML = `
    <div class="home-header">
      <div class="header-top">
        <div class="header-icon">⚒️</div>
        <h1 class="home-title"><span class="brand">Forja</span> quien quieres ser</h1>
      </div>
    </div>`;

  if (explored.size > 0) {
    home.innerHTML += `
      <div class="progress-wrap">
        <div>
          <div class="progress-meta">
            <span class="progress-label">✦ Habilidades forjadas</span>
            <span class="progress-count">${explored.size} / ${CONCEPTS.length}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
        </div>
      </div>`;
    document.getElementById('progress-fill').style.width = pct + '%';
  }

  const grid = el('div', 'grid');

  CONCEPTS.forEach(c => {
    const card = el('div', `card${explored.has(c.id) ? ' explored' : ''}`);
    card.style.setProperty('--c', c.color);
    card.innerHTML =
      '<div class="card-stripe"></div>' +
      '<div class="card-glow"></div>' +
      (explored.has(c.id) ? '<span class="card-badge">✓</span>' : '') +
      `<span class="card-emoji">${c.emoji}</span>` +
      `<span class="card-title">${c.title}</span>` +
      `<span class="card-tagline">${c.tagline}</span>`;
    card.addEventListener('click', () => goDetail(c.id));
    grid.appendChild(card);
  });

  home.appendChild(grid);
}

function renderDetail(id) {
  const c    = CONCEPTS.find(x => x.id === id);
  const view = document.getElementById('view-detail');
  view.style.setProperty('--c', c.color);

  const exHtml = c.examples.map(ex =>
    `<div class="example-item">
      <span class="example-icon">${ex.icon}</span>
      <span class="example-text">${ex.text}</span>
    </div>`
  ).join('');

  const stepsHtml = c.exercise.steps.map((s, i) =>
    `<li class="step-item">
      <span class="step-num" style="background:${c.color}">${i + 1}</span>
      <span class="step-text">${s}</span>
    </li>`
  ).join('');

  view.innerHTML = `
    <nav class="detail-nav">
      <button class="back-btn" id="back-btn">← Volver</button>
    </nav>
    <div class="detail-hero">
      <span class="detail-stripe"></span>
      <div class="detail-glow"></div>
      <div class="detail-emoji-wrap"><span class="detail-emoji">${c.emoji}</span></div>
      <h1 class="detail-title">${c.title}</h1>
      <p class="detail-tagline">${c.tagline}</p>
    </div>
    <div class="detail-body" id="detail-body"></div>`;

  document.getElementById('back-btn').addEventListener('click', goHome);

  const body = document.getElementById('detail-body');
  body.appendChild(makeSection('💡', '¿Por qué importa?',        `<p class="why-text">${c.why}</p>`));
  body.appendChild(makeSection('📍', 'Dónde la usas en tu vida', exHtml));
  body.appendChild(makeSection('🎯', `Ejercicio: ${c.exercise.title}`, `<ol class="steps-list">${stepsHtml}</ol>`));
  body.appendChild(makeEval(c));
}

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

renderHome();
