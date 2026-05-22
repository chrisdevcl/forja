// ── Historial de prácticas ─────────────────────────────────
// { conceptId: [ { date, inputs } ] }

const Storage = (() => {
  const HISTORY_KEY = 'forja_history';
  const THEME_KEY   = 'forja_theme';

  function getHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}'); }
    catch { return {}; }
  }

  function saveSession(conceptId, inputs) {
    const h = getHistory();
    if (!h[conceptId]) h[conceptId] = [];
    h[conceptId].push({ date: new Date().toLocaleDateString('es-CL'), inputs });
    localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
  }

  function getCount(conceptId) {
    return (getHistory()[conceptId] || []).length;
  }

  function saveTheme(themeId) {
    localStorage.setItem(THEME_KEY, themeId);
  }

  function loadTheme() {
    return localStorage.getItem(THEME_KEY) || 'animals';
  }

  return { getHistory, saveSession, getCount, saveTheme, loadTheme };
})();
