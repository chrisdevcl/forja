// ── DOM helper ─────────────────────────────────────────────
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// ── Toast ──────────────────────────────────────────────────
let _toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Accordion section ──────────────────────────────────────
function makeSection(icon, title, content, openByDefault) {
  const sec   = el('div', 'section');
  const body  = el('div', `section-body${openByDefault ? ' open' : ''}`);
  const arrow = el('span', `section-arrow${openByDefault ? ' open' : ''}`, '▼');
  const hdr   = el('div', 'section-header');

  if (typeof content === 'string') body.innerHTML = content;
  else body.appendChild(content);

  hdr.innerHTML = `<span class="section-icon">${icon}</span><span class="section-title">${title}</span>`;
  hdr.appendChild(arrow);
  hdr.addEventListener('click', () => {
    const open = body.classList.toggle('open');
    arrow.classList.toggle('open', open);
  });

  sec.appendChild(hdr);
  sec.appendChild(body);
  return sec;
}

// ── Exercise ───────────────────────────────────────────────
function makeExercise(concept) {
  const wrap    = el('div', 'exercise-inner');
  const checked = new Set();
  const inputs  = {};
  const stepsEl = el('div', 'exercise-steps');

  concept.exercise.steps.forEach((step, i) => {
    const stepEl   = el('div', 'ex-step');
    const checkbox = el('button', 'ex-checkbox', '');
    checkbox.setAttribute('aria-label', `Paso ${i + 1}`);

    const content = el('div', 'ex-content');
    content.appendChild(el('span', 'ex-num', `Paso ${i + 1}`));
    content.appendChild(el('p', 'ex-text', step.text));

    if (step.input) {
      const isTextarea = step.input.placeholder.includes('\n');
      const inputEl = isTextarea ? el('textarea', 'ex-input') : el('input', 'ex-input');
      if (isTextarea) { inputEl.rows = 3; inputEl.style.resize = 'none'; }
      else inputEl.type = 'text';
      inputEl.placeholder = step.input.placeholder;
      inputEl.addEventListener('input', e => { inputs[i] = e.target.value; });
      content.appendChild(inputEl);
    }

    checkbox.addEventListener('click', () => {
      if (checked.has(i)) {
        checked.delete(i);
        stepEl.classList.remove('done');
        checkbox.classList.remove('checked');
        checkbox.innerHTML = '';
      } else {
        checked.add(i);
        stepEl.classList.add('done');
        checkbox.classList.add('checked');
        checkbox.innerHTML = '✓';
      }
      updateBtn();
    });

    stepEl.appendChild(checkbox);
    stepEl.appendChild(content);
    stepsEl.appendChild(stepEl);
  });

  wrap.appendChild(stepsEl);

  const btn = el('button', 'complete-btn complete-btn--disabled', '🔒 Marca todos los pasos para completar');
  btn.disabled = true;

  function updateBtn() {
    const all = checked.size === concept.exercise.steps.length;
    btn.disabled  = !all;
    btn.className = all ? 'complete-btn' : 'complete-btn complete-btn--disabled';
    btn.innerHTML = all
      ? `✦ Registrar práctica de ${concept.title}`
      : '🔒 Marca todos los pasos para completar';
    btn.style.background = all ? concept.color : '';
  }

  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    Storage.saveSession(concept.id, { ...inputs });
    const count = Storage.getCount(concept.id);
    showToast(`🔥 ¡Práctica #${count} de ${concept.title} registrada!`);
    wrap.removeChild(btn);
    wrap.appendChild(makeHistoryInline(concept.id, concept.color));
  });

  wrap.appendChild(btn);
  return wrap;
}

// ── History inline ─────────────────────────────────────────
function makeHistoryInline(conceptId, color) {
  const history = Storage.getHistory()[conceptId] || [];
  const wrap    = el('div', 'history-inline');
  wrap.innerHTML = `<p class="history-title">📋 Tus prácticas de este concepto</p>`;

  if (!history.length) {
    wrap.innerHTML += `<p class="history-empty">Aún no hay prácticas registradas.</p>`;
    return wrap;
  }

  const list = el('div', 'history-list');
  history.slice().reverse().forEach((s, i) => {
    const item   = el('div', 'history-item');
    const inputs = Object.values(s.inputs || {}).filter(v => v?.trim());
    item.innerHTML =
      `<span class="history-num" style="background:${color}">#${history.length - i}</span>` +
      `<div class="history-info">` +
        `<span class="history-date">${s.date}</span>` +
        (inputs.length ? `<span class="history-notes">${inputs[0]}</span>` : '') +
      `</div>`;
    list.appendChild(item);
  });

  wrap.appendChild(list);
  return wrap;
}

// ── Theme picker (header button + dropdown) ────────────────
function makeThemePicker(onSelect) {
  const wrap    = el('div', 'theme-picker-wrap');
  const trigger = el('button', 'theme-trigger');
  trigger.setAttribute('aria-label', 'Cambiar tema visual');
  trigger.title    = 'Cambiar tema';
  trigger.innerHTML = getThemeTriggerIcon();

  const dropdown = el('div', 'theme-dropdown');

  THEMES.forEach(t => {
    const opt = el('button',
      `theme-option${t.id === window._activeTheme ? ' active' : ''}`);
    opt.innerHTML =
      `<span class="theme-opt-icon">${t.getTriggerIcon()}</span>` +
      `<span>${t.label}</span>`;
    opt.addEventListener('click', e => {
      e.stopPropagation();
      onSelect(t.id);
      dropdown.classList.remove('open');
    });
    dropdown.appendChild(opt);
  });

  let open = false;
  trigger.addEventListener('click', e => {
    e.stopPropagation();
    open = !open;
    dropdown.classList.toggle('open', open);
  });

  document.addEventListener('click', () => {
    open = false;
    dropdown.classList.remove('open');
  });

  wrap.appendChild(trigger);
  wrap.appendChild(dropdown);
  return wrap;
}
