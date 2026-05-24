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

  function exportData() {
    const payload = { history: getHistory(), theme: localStorage.getItem(THEME_KEY) || 'animals' };
    const bytes   = new TextEncoder().encode(JSON.stringify(payload));
    const binary  = Array.from(bytes, b => String.fromCodePoint(b)).join('');
    return btoa(binary);
  }

  function importData(code) {
    try {
      const binary  = atob(code.trim());
      const bytes   = Uint8Array.from(binary, c => c.codePointAt(0));
      const payload = JSON.parse(new TextDecoder().decode(bytes));
      if (!payload.history) return false;
      localStorage.setItem(HISTORY_KEY, JSON.stringify(payload.history));
      if (payload.theme) localStorage.setItem(THEME_KEY, payload.theme);
      return true;
    } catch {
      return false;
    }
  }

  return {
    getHistory, saveSession, getCount,
    saveTheme, loadTheme,
    exportData, importData,
  };
})();
