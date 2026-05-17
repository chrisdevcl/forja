// ── Historial de prácticas ─────────────────────────────────
// { conceptId: [ { date, inputs } ] }

const Storage = (() => {
  const HISTORY_KEY   = 'forja_history';
  const IMG_CACHE_KEY = 'forja_img_cache_v3';
  const THEME_KEY     = 'forja_theme';

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

  // ── Image cache ──────────────────────────────────────────
  function getImageCache() {
    try { return JSON.parse(localStorage.getItem(IMG_CACHE_KEY) || '{}'); }
    catch { return {}; }
  }

  function saveImageCache(themeId, map) {
    const cache = getImageCache();
    cache[themeId] = map;
    localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(cache));
  }

  function getThemeCache(themeId) {
    return getImageCache()[themeId] || null;
  }

  function hasCachedTheme(themeId) {
    const c = getThemeCache(themeId);
    return c !== null && Object.values(c).some(v => v);
  }

  // ── Theme persistence ────────────────────────────────────
  function saveTheme(themeId) {
    localStorage.setItem(THEME_KEY, themeId);
  }

  function loadTheme() {
    return localStorage.getItem(THEME_KEY) || 'default';
  }

  return {
    getHistory, saveSession, getCount,
    saveImageCache, getThemeCache, hasCachedTheme,
    saveTheme, loadTheme,
  };
})();
