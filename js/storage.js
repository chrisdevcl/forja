// ── Storage ────────────────────────────────────────────────
const Storage = (() => {
  const HISTORY_KEY      = 'forja_history';
  const THEME_KEY        = 'forja_theme';
  const ACHIEVEMENTS_KEY = 'forja_achievements';
  const STREAK_KEY       = 'forja_streak';

  // ── History ──────────────────────────────────────────────
  function getHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}'); }
    catch { return {}; }
  }

  function saveSession(conceptId, inputs) {
    const h = getHistory();
    if (!h[conceptId]) h[conceptId] = [];
    h[conceptId].push({ date: new Date().toLocaleDateString('es-CL'), inputs });
    localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
    _updateStreak();
  }

  function getCount(conceptId) {
    return (getHistory()[conceptId] || []).length;
  }

  function getTotalPractices() {
    return Object.values(getHistory()).reduce((s, a) => s + a.length, 0);
  }

  function getExploredCount() {
    return Object.values(getHistory()).filter(a => a.length > 0).length;
  }

  // ── Streak ───────────────────────────────────────────────
  function getStreak() {
    try { return JSON.parse(localStorage.getItem(STREAK_KEY) || 'null') || { last: null, current: 0, max: 0 }; }
    catch { return { last: null, current: 0, max: 0 }; }
  }

  function _updateStreak() {
    const today    = new Date().toISOString().slice(0, 10);
    const s        = getStreak();
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (s.last === today) return;
    if (s.last === yesterday) s.current += 1;
    else s.current = 1;
    s.last = today;
    s.max  = Math.max(s.max, s.current);
    localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  }

  // ── Theme ─────────────────────────────────────────────────
  function saveTheme(themeId) { localStorage.setItem(THEME_KEY, themeId); }
  function loadTheme()        { return localStorage.getItem(THEME_KEY) || 'animals'; }

  // ── Achievements ──────────────────────────────────────────
  function getUnlocked() {
    try { return JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || '[]'); }
    catch { return []; }
  }

  function unlockAchievement(id) {
    const list = getUnlocked();
    if (list.includes(id)) return false;
    list.push(id);
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(list));
    return true;
  }

  // ── Export / Import ───────────────────────────────────────
  function exportData() {
    const payload = {
      history:      getHistory(),
      theme:        loadTheme(),
      achievements: getUnlocked(),
      streak:       getStreak(),
    };
    const bytes  = new TextEncoder().encode(JSON.stringify(payload));
    const binary = Array.from(bytes, b => String.fromCodePoint(b)).join('');
    return btoa(binary);
  }

  function importData(code) {
    try {
      const binary  = atob(code.trim());
      const bytes   = Uint8Array.from(binary, c => c.codePointAt(0));
      const payload = JSON.parse(new TextDecoder().decode(bytes));
      if (!payload.history) return false;
      localStorage.setItem(HISTORY_KEY,      JSON.stringify(payload.history));
      if (payload.theme)        localStorage.setItem(THEME_KEY,        payload.theme);
      if (payload.achievements) localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(payload.achievements));
      if (payload.streak)       localStorage.setItem(STREAK_KEY,       JSON.stringify(payload.streak));
      return true;
    } catch { return false; }
  }

  return {
    getHistory, saveSession, getCount, getTotalPractices, getExploredCount,
    getStreak,
    saveTheme, loadTheme,
    getUnlocked, unlockAchievement,
    exportData, importData,
  };
})();
