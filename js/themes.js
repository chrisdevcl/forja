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
  // Habilidades
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
  // Nocivos
  envidia:             '🐍',  // serpiente — envidia silenciosa y venenosa
  egoismo:             '🦔',  // erizo — cerrado en sí mismo
  agresividad:         '🦂',  // escorpión — ataca cuando se siente amenazado
  mentira:             '🦎',  // camaleón — cambia según conveniencia
  exclusion:           '🦭',  // foca — forma grupos cerrados
  rencor:              '🦀',  // cangrejo — se aferra y no suelta
  compararse:          '🦚',  // pavo real — siempre mirando a los demás
  impulsividad:        '🐂',  // toro — arremete sin pensar
  // Emociones
  preocupacion:        '🐦',  // pajarito que no para de trinar
  ansiedad:            '🐇',  // conejo siempre en alerta
  frustracion:         '🦏',  // rinoceronte que embiste
  miedo:               '🦌',  // ciervo paralizado
  tristeza:            '🐋',  // ballena — llanto profundo
  rabia:               '🦬',  // bisonte que arremete
  salud:               '🦥',  // perezoso — se siente sin energía
  soledad:             '🐟',  // pez solo en el agua
  verguenza:           '🦩',  // flamenco que esconde la cara
  abrumamiento:        '🐙',  // pulpo — demasiados brazos a la vez
};

// ── Pokemon IDs ───────────────────────────────────────────
// Artwork oficial: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
const POKEMON_MAP = {
  // Habilidades
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
  // Nocivos
  envidia:             200,  // Misdreavus
  egoismo:             303,  // Mawile
  agresividad:         56,   // Mankey
  mentira:             353,  // Shuppet
  exclusion:           302,  // Sableye
  rencor:              246,  // Larvitar
  compararse:          132,  // Ditto
  impulsividad:        322,  // Numel
  // Emociones
  preocupacion:        177,  // Natu — siempre mirando alrededor, inquieto
  ansiedad:            425,  // Drifloon — flota sin control, incierto
  frustracion:         54,   // Psyduck — dolor de cabeza constante
  miedo:               92,   // Gastly — espíritu del miedo
  tristeza:            287,  // Slakoth — sin energía, cabizbajo
  rabia:               58,   // Growlithe — perro enfadado
  salud:               174,  // Igglybuff — frágil, se preocupa por todo
  soledad:             238,  // Smoochum — busca afecto constantemente
  verguenza:           60,   // Poliwag — espiral giratoria como mareo/rubor
  abrumamiento:        213,  // Shuckle — se esconde dentro de su caparazón
};

// ── Tier system ───────────────────────────────────────────
const TIERS = [
  {
    min: 0, label: null,
    cardBg: '#ffffff',    border: '#DDDDE8',
    heroBg: '#ffffff',
    titleColor: '#1A1A2E', tagColor: null,
    stripeColor: null,    pillBg: null, pillText: null,
    glowColor: null,
  },
  {
    min: 1, label: 'Bronce',
    cardBg: '#FEF0DC',    border: '#B45309',
    heroBg: '#FEF0DC',
    titleColor: '#6B2D06', tagColor: '#92400E',
    stripeColor: '#B45309', pillBg: '#B45309', pillText: '#ffffff',
    glowColor: '#B45309',
  },
  {
    min: 3, label: 'Plata',
    cardBg: '#E8EDF5',    border: '#475569',
    heroBg: '#E8EDF5',
    titleColor: '#0F172A', tagColor: '#334155',
    stripeColor: '#475569', pillBg: '#334155', pillText: '#E2E8F0',
    glowColor: '#475569',
  },
  {
    min: 6, label: 'Oro',
    cardBg: '#FEF3C7',    border: '#92400E',
    heroBg: '#FEF3C7',
    titleColor: '#6B2D06', tagColor: '#92400E',
    stripeColor: '#D97706', pillBg: '#D97706', pillText: '#ffffff',
    glowColor: '#F59E0B',
  },
  {
    min: 10, label: 'Élite',
    cardBg: '#2D1B69',    border: '#A78BFA',
    heroBg: '#2D1B69',
    titleColor: '#EDE9FE', tagColor: '#C4B5FD',
    stripeColor: '#7C3AED', pillBg: '#A78BFA', pillText: '#1E1040',
    glowColor: '#A78BFA',
  },
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
  return `<span class="tier-badge tier-badge--detail" style="background:${tier.pillBg};color:${tier.pillText}">${tier.label} · ${tier.count}×</span>`;
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
  const color = concept.color || '#6366F1';
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
