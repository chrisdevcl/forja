// ── SVG Icons ─────────────────────────────────────────────

function iconPokeball(size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
    <path d="M1 12 A11 11 0 0 1 23 12 Z" fill="#EF4444"/>
    <line x1="1" y1="12" x2="23" y2="12" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="2" fill="#EF4444"/>
  </svg>`;
}

function iconLamp(size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="5" y="21" width="14" height="2.5" rx="1.2" fill="#1a1a2e"/>
    <line x1="12" y1="22" x2="8"  y2="16" stroke="#1a1a2e" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="8"  y1="16" x2="13" y2="10" stroke="#1a1a2e" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M10 10 L16 10 L17 6 L9 6 Z" fill="#F59E0B" stroke="#1a1a2e" stroke-width="1" stroke-linejoin="round"/>
    <ellipse cx="13" cy="5.5" rx="3.5" ry="1.8" fill="#FDE68A"/>
  </svg>`;
}

function iconPokeType(catId, size = 16) {
  const cfg = {
    todos:       { bg: '#EF4444', shape: 'pokeball' },
    mente:       { bg: '#A78BFA', shape: 'star'     },
    relaciones:  { bg: '#F472B6', shape: 'heart'    },
    crecimiento: { bg: '#34D399', shape: 'leaf'     },
  }[catId] || { bg: '#EF4444', shape: 'pokeball' };

  const inner = {
    pokeball:
      `<circle cx="8" cy="8" r="7" fill="${cfg.bg}"/>
       <path d="M1 8 A7 7 0 0 1 15 8 Z" fill="white" opacity="0.45"/>
       <line x1="1" y1="8" x2="15" y2="8" stroke="white" stroke-width="1.2"/>
       <circle cx="8" cy="8" r="2.5" fill="white"/>`,
    star:
      `<circle cx="8" cy="8" r="7" fill="${cfg.bg}"/>
       <polygon points="8,2 9.5,6 14,6 10.5,8.5 11.8,13 8,10.5 4.2,13 5.5,8.5 2,6 6.5,6" fill="white"/>`,
    heart:
      `<circle cx="8" cy="8" r="7" fill="${cfg.bg}"/>
       <path d="M8 12 C8 12 3 9 3 6 A2.5 2.5 0 0 1 8 5 A2.5 2.5 0 0 1 13 6 C13 9 8 12 8 12Z" fill="white"/>`,
    leaf:
      `<circle cx="8" cy="8" r="7" fill="${cfg.bg}"/>
       <path d="M8 13 Q4 8 6 4 Q10 3 12 7 Q12 11 8 13Z" fill="white"/>
       <line x1="8" y1="13" x2="8" y2="6" stroke="${cfg.bg}" stroke-width="1"/>`,
  }[cfg.shape];

  return `<svg width="${size}" height="${size}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
}

function iconPixarCat(catId, size = 16) {
  const inner = {
    todos:
      `<polygon points="8,1 10,6 15,6 11,9.5 12.5,15 8,11.5 3.5,15 5,9.5 1,6 6,6" fill="#F59E0B"/>`,
    mente:
      `<ellipse cx="8" cy="7" rx="4" ry="4.5" fill="#FDE68A" stroke="#F59E0B" stroke-width="1"/>
       <rect x="6" y="11" width="4" height="1.5" rx="0.5" fill="#D97706"/>
       <rect x="6.5" y="12.5" width="3" height="1.5" rx="0.5" fill="#D97706"/>
       <line x1="8" y1="3"   x2="8"   y2="2"   stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
       <line x1="11" y1="4.5" x2="11.8" y2="3.8" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
       <line x1="5" y1="4.5"  x2="4.2"  y2="3.8" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>`,
    relaciones:
      `<path d="M8 13 C8 13 2 9 2 5.5 A3 3 0 0 1 8 4 A3 3 0 0 1 14 5.5 C14 9 8 13 8 13Z" fill="#EC4899"/>`,
    crecimiento:
      `<circle cx="8" cy="5"   r="3"   fill="#EF4444"/>
       <circle cx="4" cy="7.5" r="2.2" fill="#3B82F6"/>
       <circle cx="12" cy="7.5" r="2.2" fill="#F59E0B"/>
       <line x1="8"  y1="8"   x2="8"  y2="15" stroke="#1a1a2e" stroke-width="1" stroke-linecap="round"/>
       <line x1="4"  y1="9.5" x2="7"  y2="14" stroke="#1a1a2e" stroke-width="1" stroke-linecap="round"/>
       <line x1="12" y1="9.5" x2="9"  y2="14" stroke="#1a1a2e" stroke-width="1" stroke-linecap="round"/>`,
  }[catId] || `<polygon points="8,1 10,6 15,6 11,9.5 12.5,15 8,11.5 3.5,15 5,9.5 1,6 6,6" fill="#F59E0B"/>`;

  return `<svg width="${size}" height="${size}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
}

function iconEmoji(emoji, size = 16) {
  return `<span style="font-size:${size}px;line-height:1">${emoji}</span>`;
}

// ── Theme definitions ─────────────────────────────────────
const THEMES = [
  {
    id: 'default',
    label: 'Emojis',
    getTriggerIcon: () => iconEmoji('😊', 20),
    getCategoryIcon: (id) => iconEmoji({ todos:'⚡', mente:'🧠', relaciones:'🤝', crecimiento:'🚀' }[id] || '⚡', 16),
  },
  {
    id: 'pokemon',
    label: 'Pokémon',
    getTriggerIcon: () => iconPokeball(22),
    getCategoryIcon: (id) => iconPokeType(id, 18),
  },
];

// ── Pokemon IDs ───────────────────────────────────────────
const POKEMON_MAP = {
  paciencia:           79,   // Slowpoke
  autocontrol:         63,   // Abra
  resiliencia:         4,    // Charmander
  confianza:           25,   // Pikachu
  curiosidad:          479,  // Rotom
  creatividad:         235,  // Smeargle
  empatia:             113,  // Chansey
  comunicacion:        441,  // Chatot
  'trabajo-en-equipo': 67,   // Machoke
  generosidad:         151,  // Mew
  honestidad:          175,  // Togepi
  independencia:       133,  // Eevee
  responsabilidad:     1,    // Bulbasaur
  perseverancia:       129,  // Magikarp
  valentia:            447,  // Riolu
  gratitud:            39,   // Jigglypuff
};

// ── URL builders ──────────────────────────────────────────
function getPokemonUrl(conceptId) {
  const id = POKEMON_MAP[conceptId];
  return id
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    : null;
}

// ── Preloading ────────────────────────────────────────────
function preloadAllImages() {
  Object.values(POKEMON_MAP).forEach(id => {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  });
}

// ── Theme helpers ─────────────────────────────────────────
function getActiveThemeDef() {
  return THEMES.find(t => t.id === window._activeTheme) || THEMES[0];
}

function getCategoryIcon(catId) {
  return getActiveThemeDef().getCategoryIcon(catId);
}

function getThemeTriggerIcon() {
  return getActiveThemeDef().getTriggerIcon();
}

// ── Display helpers ───────────────────────────────────────
function getConceptDisplay(concept, size) {
  const px = size === 'detail' ? '96' : '56';

  if (window._activeTheme === 'pokemon') {
    const url = getPokemonUrl(concept.id);
    if (!url) return `<span class="concept-emoji">${concept.emoji}</span>`;
    return (
      `<img class="concept-img concept-img--poke" src="${url}" ` +
      `alt="${concept.title}" width="${px}" height="${px}" loading="eager" data-fallback="${concept.emoji}">` +
      `<span class="concept-emoji" style="display:none">${concept.emoji}</span>`
    );
  }

  return `<span class="concept-emoji">${concept.emoji}</span>`;
}
