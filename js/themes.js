// ── SVG Icons ─────────────────────────────────────────────
// Solo los que se usan: trigger del selector de tema.

function iconPokeball(size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
    <path d="M1 12 A11 11 0 0 1 23 12 Z" fill="#EF4444"/>
    <line x1="1" y1="12" x2="23" y2="12" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="2" fill="#EF4444"/>
  </svg>`;
}

function iconEmoji(emoji, size = 20) {
  return `<span style="font-size:${size}px;line-height:1">${emoji}</span>`;
}

// ── Theme definitions ─────────────────────────────────────
const THEMES = [
  {
    id: 'animals',
    label: 'Animales',
    getTriggerIcon: () => iconEmoji('🐾', 20),
  },
  {
    id: 'pokemon',
    label: 'Pokémon',
    getTriggerIcon: () => iconPokeball(22),
  },
];

// ── Animal emoji map ──────────────────────────────────────
const ANIMAL_MAP = {
  paciencia:           '🐢',
  autocontrol:         '🦉',
  resiliencia:         '🦅',
  confianza:           '🦁',
  curiosidad:          '🐒',
  creatividad:         '🦜',
  empatia:             '🐬',
  comunicacion:        '🐦',
  'trabajo-en-equipo': '🐺',
  generosidad:         '🐘',
  honestidad:          '🦊',
  independencia:       '🐈',
  responsabilidad:     '🐝',
  perseverancia:       '🐜',
  valentia:            '🐆',
  gratitud:            '🦋',
  compartir:           '🐧',
  respeto:             '🦒',
  amabilidad:          '🐰',
  perdon:              '🕊️',
  autocuidado:         '🦦',
  concentracion:       '🦅',
  aceptacion:          '🦎',
  humildad:            '🐑',
  organizacion:        '🦫',
};

// ── Pokemon IDs ───────────────────────────────────────────
// Artwork oficial: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
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
  compartir:           35,   // Clefairy
  respeto:             131,  // Lapras
  amabilidad:          176,  // Togetic
  perdon:              440,  // Happiny
  autocuidado:         258,  // Mudkip
  concentracion:       202,  // Wobbuffet
  aceptacion:          196,  // Espeon
  humildad:            143,  // Snorlax
  organizacion:        137,  // Porygon
};

// ── URL builder ───────────────────────────────────────────
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

// ── Trigger icon ──────────────────────────────────────────
function getThemeTriggerIcon() {
  const theme = THEMES.find(t => t.id === window._activeTheme) || THEMES[0];
  return theme.getTriggerIcon();
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

  const emoji = window._activeTheme === 'animals'
    ? (ANIMAL_MAP[concept.id] || concept.emoji)
    : concept.emoji;

  return `<span class="concept-emoji">${emoji}</span>`;
}
