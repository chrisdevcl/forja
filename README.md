# Forja
> Las habilidades que nadie enseña en el colegio.

App web educativa para niños de 6 a 12 años. Vanilla JS puro, sin frameworks, desplegable en GitHub Pages como PWA.

---

## Estructura del proyecto

```
forja/
│
├── index.html              # Shell principal, carga scripts y registra el service worker
├── manifest.json           # Configuración PWA (nombre, colores, iconos)
├── sw.js                   # Service worker (cache offline, estrategia por tipo de recurso)
├── favicon.svg             # Ícono SVG fuente
│
├── css/
│   └── styles.css          # Todos los estilos del proyecto
│
├── js/
│   ├── storage.js          # localStorage: historial, racha, tema, logros, export/import
│   ├── data.js             # Datos: CATEGORIES, CONCEPTS, NOCIVOS, EMOCIONES, ACHIEVEMENTS, GLOSSARY
│   ├── themes.js           # Temas visuales, mapas de imágenes, glow, tiers, getConceptDisplay()
│   ├── components.js       # Piezas de UI reutilizables: acordeón, ejercicio, historial, modales
│   └── app.js              # Navegación, renderizado de vistas y pull-to-refresh
│
└── icons/                  # Iconos PWA generados desde favicon.svg
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── icon-72x72.png  →  icon-512x512.png
```

---

## Arquitectura JS

Los scripts se cargan en orden estricto de dependencias (definido en `index.html`):

```
storage.js → data.js → themes.js → components.js → app.js
```

| Archivo         | Responsabilidad                                                                          |
|-----------------|------------------------------------------------------------------------------------------|
| `storage.js`    | IIFE con acceso a `localStorage`. Expone `Storage.*`                                     |
| `data.js`       | Arrays de datos puros + `getDailyChallenge()`. No tiene lógica de UI.                    |
| `themes.js`     | Temas, mapas de emojis/Pokémon, tiers, glow, `getConceptDisplay()`, `preloadAllImages()` |
| `components.js` | Funciones que construyen nodos DOM: acordeón, ejercicio, historial inline, modales       |
| `app.js`        | Estado global (`window._activeTheme`, etc.), renderizado, navegación, pull-to-refresh    |

---

## Temas visuales

| ID        | Descripción                        | Fuente                                             |
|-----------|------------------------------------|----------------------------------------------------|
| `animals` | Emojis de animales representativos | Emojis del sistema (sin dependencias externas)     |
| `pokemon` | Artwork oficial de Pokémon         | PokeAPI GitHub CDN — URLs estáticas, sin API calls |

Las imágenes Pokémon se precachean al iniciar la app mediante `preloadAllImages()` y quedan disponibles offline a través del service worker.

---

## Sistema de tiers

Cada concepto acumula prácticas y escala visualmente:

| Prácticas | Tier   | Visual                         |
|-----------|--------|--------------------------------|
| 0         | —      | Tarjeta blanca                 |
| 1–2       | Bronce | Fondo tierra, borde cobre      |
| 3–5       | Plata  | Fondo azul frío, borde plata   |
| 6–9       | Oro    | Fondo amarillo, borde dorado   |
| 10+       | Élite  | Fondo violeta oscuro           |

El tier afecta la tarjeta en el grid y el interior de la vista detalle.

---

## Secciones de contenido

| Pestaña             | Contenido                                                       |
|---------------------|-----------------------------------------------------------------|
| Quién quiero ser    | 25 habilidades positivas con ejercicios completables al momento |
| Qué quiero evitar   | 8 actitudes nocivas con ejercicios de reconocimiento            |
| Cuando me siento... | 10 emociones con herramientas de uso inmediato                  |

Todos los ejercicios están diseñados para completarse en el momento, sin requerir acciones diferidas.

---

## Datos (`data.js`)

| Constante      | Descripción                                                                  |
|----------------|------------------------------------------------------------------------------|
| `CATEGORIES`   | Filtros de la pestaña principal (todos, mente, relaciones, crecimiento)      |
| `CONCEPTS`     | 25 habilidades positivas con `why`, `examples`, `exercise`                   |
| `NOCIVOS`      | 8 actitudes a evitar, misma forma que `CONCEPTS`                             |
| `EMOCIONES`    | 10 emociones con `tools[]` (sin inputs, solo pasos de texto)                 |
| `ACHIEVEMENTS` | 12 logros con función `condition(stats)` para desbloqueo                     |
| `GLOSSARY`     | 15 palabras difíciles con `conceptId` (para respetar el tema visual) y `def` |

---

## Modales

| Modal              | Función               | Disparado desde             |
|--------------------|-----------------------|-----------------------------|
| Palabras difíciles | `showGlossaryModal()` | Botón libro en el header    |
| Mis datos          | `showDataModal()`     | Botón exportar en el header |

Ambos modales bloquean el scroll del sitio mientras están abiertos y se cierran tocando fuera o el ✕.

---

## Racha (`storage.js`)

- Usa fechas en hora local (no UTC) para evitar desfases en zonas horarias como Chile.
- `checkStreak()` se llama al iniciar la app y al volver a la pestaña: resetea la racha si el usuario saltó un día.
- El reto diario y el banner de racha se refrescan automáticamente al medianoche si la app está abierta.

---

## PWA

- Instalable en iOS y Android desde el navegador
- Funciona offline (cache-first para assets propios, network-first para recursos externos)
- Pull-to-refresh nativo implementado con eventos táctiles (`touchstart`/`touchmove`/`touchend`)
- Imágenes Pokémon se precachean al primer uso

---

## Despliegue en GitHub Pages

1. Subir el repositorio a GitHub
2. Settings → Pages → Branch: `main` / root
3. El service worker requiere HTTPS — GitHub Pages lo provee automáticamente

> ⚠️ El service worker no funciona abriendo `index.html` como archivo local (`file:///`).  
> Usa GitHub Pages, `npx serve .` o Live Server en VS Code para desarrollo local.

---

## Agregar contenido

**Nueva habilidad:** agrega un objeto a `CONCEPTS` en `data.js`, luego su `id` a `ANIMAL_MAP` y `POKEMON_MAP` en `themes.js`.

**Nueva emoción:** agrega a `EMOCIONES`. No necesita entrada en los mapas de temas (usa el color fijo `#6366F1`).

**Nueva actitud nociva:** agrega a `NOCIVOS` + ambos mapas de temas.

**Nuevo logro:** agrega a `ACHIEVEMENTS` con una función `condition(stats)`. El objeto `stats` tiene: `total`, `streak`, `explored`, `nocivos`, `emociones`.

**Nueva palabra en el glosario:** agrega a `GLOSSARY` con `word`, `conceptId` (ID de un concepto existente para respetar el tema visual) y `def`.
