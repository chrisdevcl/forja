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

// ── Tier system ───────────────────────────────────────────
const TIERS = [
  { min: 0,  label: null,     border: null,      cardBg: null,      heroBg: null      },
  { min: 1,  label: 'Bronce', border: '#CD7F32', cardBg: '#FEF9F0', heroBg: '#FEF3E2' },
  { min: 3,  label: 'Plata',  border: '#94A3B8', cardBg: '#F8FAFC', heroBg: '#F1F5F9' },
  { min: 6,  label: 'Oro',    border: '#F59E0B', cardBg: '#FFFBEB', heroBg: '#FEF9C3' },
  { min: 10, label: 'Élite',  border: '#7C3AED', cardBg: '#FAF5FF', heroBg: '#EDE9FE' },
];

function getTier(conceptId) {
  const count = Storage.getCount(conceptId);
  let tier = TIERS[0];
  for (const t of TIERS) {
    if (count >= t.min) tier = t;
  }
  return { ...tier, count };
}

// Badge solo para el detalle
function getTierBadgeHtml(conceptId) {
  const tier = getTier(conceptId);
  if (!tier.label) return '';
  return `<span class="tier-badge tier-badge--detail" style="border:2px solid ${tier.border};color:${tier.border}">${tier.label} · ${tier.count}×</span>`;
}
// 0 = sin prácticas, 1 = 1-2, 2 = 3-5, 3 = 6+
function getGlowLevel(conceptId) {
  const n = Storage.getCount(conceptId);
  if (n === 0) return 0;
  if (n <= 2)  return 1;
  if (n <= 5)  return 2;
  return 3;
}

function glowFilter(level, color) {
  if (level === 0) return '';
  const { r, g, b } = hexToRgb(color);
  const configs = [
    null,
    `drop-shadow(0 0 5px rgba(${r},${g},${b},0.6))`,
    `drop-shadow(0 0 10px rgba(${r},${g},${b},0.85)) drop-shadow(0 0 4px rgba(${r},${g},${b},0.6))`,
    `drop-shadow(0 0 16px rgba(${r},${g},${b},1)) drop-shadow(0 0 6px rgba(${r},${g},${b},0.9)) drop-shadow(0 0 2px rgba(${r},${g},${b},1))`,
  ];
  return configs[level];
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0,2), 16),
    g: parseInt(h.slice(2,4), 16),
    b: parseInt(h.slice(4,6), 16),
  };
}
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
  const px    = size === 'detail' ? '96' : '56';
  const level = getGlowLevel(concept.id);
  const color = concept.color;
  const filt  = glowFilter(level, color);

  if (window._activeTheme === 'pokemon') {
    const url = getPokemonUrl(concept.id);
    if (!url) return `<span class="concept-emoji" style="${filt ? `filter:${filt}` : ''}">${concept.emoji}</span>`;
    return (
      `<img class="concept-img concept-img--poke" src="${url}" ` +
      `alt="${concept.title}" width="${px}" height="${px}" loading="eager" ` +
      `style="${filt ? `filter:${filt}` : ''}" data-fallback="${concept.emoji}">` +
      `<span class="concept-emoji" style="display:none">${concept.emoji}</span>`
    );
  }

  const emoji = window._activeTheme === 'animals'
    ? (ANIMAL_MAP[concept.id] || concept.emoji)
    : concept.emoji;

  const { r, g, b } = hexToRgb(color);
  const bgStyles = [
    '',
    `background:rgba(${r},${g},${b},0.15);border-radius:50%;padding:4px;`,
    `background:rgba(${r},${g},${b},0.28);border-radius:50%;padding:6px;`,
    `background:rgba(${r},${g},${b},0.42);border-radius:50%;padding:8px;box-shadow:0 0 0 4px rgba(${r},${g},${b},0.25);`,
  ];

  return `<span class="concept-emoji" style="${bgStyles[level]}">${emoji}</span>`;
}
