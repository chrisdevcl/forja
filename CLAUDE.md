# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running locally

No build step — this is pure vanilla JS. Serve the files with any static server:

```bash
npx serve .
# or: python3 -m http.server 8080
```

Open `http://localhost:3000` (or whichever port the server uses). Do **not** open `index.html` directly as a `file:///` URL — the service worker won't register.

## Architecture

The app loads five scripts in strict dependency order (enforced by script tag order in `index.html`):

```
storage.js → data.js → themes.js → components.js → app.js
```

Each file exposes globals consumed by the next. There is no module system, bundler, or build step.

**Global state** lives on `window` in `app.js`:
- `window._activeTheme` — `'animals'` | `'pokemon'` (persisted in localStorage)
- `window._activeCategory` — current category filter on home
- `window._activeTab` — `'habilidades'` | `'nocivos'` | `'emociones'`

**Navigation** is fake SPA: there are two DOM views (`#view-home`, `#view-detail`). Navigating means re-rendering one of them and toggling visibility. There is no router or URL change.

**Persistence** is entirely `localStorage`, managed through the `Storage` IIFE in `storage.js`. Keys: `forja_history`, `forja_theme`, `forja_achievements`, `forja_streak`. Export/import uses base64-encoded JSON.

## Data model

All content lives in `data.js` as plain JS arrays:

- `CONCEPTS` — 25 positive skills (habilidades), each with `id`, `emoji`, `color`, `category`, `tagline`, `why`, `examples[]`, and `exercise` (with `steps[]`, each step optionally having an `input`)
- `NOCIVOS` — 8 harmful attitudes, same shape as CONCEPTS but no `category`
- `EMOCIONES` — 10 emotions, each with `tools[]` (arrays of step strings, no input fields)
- `ACHIEVEMENTS` — 12 unlockable badges with `condition(stats)` functions
- `CATEGORIES` — the 4 filter tabs for CONCEPTS (`todos`, `mente`, `relaciones`, `crecimiento`)

## Theme system

`themes.js` handles all visual variations:

- `ANIMAL_MAP` — maps concept `id` → emoji override for the `animals` theme
- `POKEMON_MAP` — maps concept `id` → Pokémon number; images are fetched from PokeAPI's GitHub CDN as static URLs (no API calls)
- `getConceptDisplay(concept, size)` — returns the HTML string for a concept's visual (either a Pokémon `<img>` or an emoji `<span>`), applying glow effects based on practice count
- `TIERS` — 5 tiers (none/bronce/plata/oro/élite) that change card background, border, title color, stripe, and glow based on `Storage.getCount(id)`

`getTier(conceptId)` is called everywhere a card or detail is rendered to determine current visual state.

## Component pattern

`components.js` exports DOM-building functions (no JSX, no template engine):
- `el(tag, className, html)` — shorthand for `createElement`
- `makeSection(icon, title, content, openByDefault)` — accordion section
- `makeExercise(concept)` — the interactive exercise form with checkboxes, inputs, and the "register practice" button that calls `Storage.saveSession()` and fires `celebrate()` + `checkAchievements()`
- `makeHistoryInline(conceptId, color)` — per-concept session history
- `makeThemePicker(onSelect)` — the header dropdown
- `showDataModal(onDone)` — export/import modal

## Adding content

- **New skill**: add an object to `CONCEPTS` in `data.js`, then add its `id` to both `ANIMAL_MAP` and `POKEMON_MAP` in `themes.js`
- **New emotion**: add to `EMOCIONES`; no theme mapping needed (emotions use the fixed `#6366F1` purple)
- **New harmful attitude**: add to `NOCIVOS` + both theme maps
- **New achievement**: add to `ACHIEVEMENTS` with a `condition(stats)` — `stats` has `total`, `streak`, `explored`, `nocivos`, `emociones`

## PWA / Service worker

`sw.js` uses cache-first for local assets and network-first for external resources (Google Fonts, PokeAPI images). Pokémon images are preloaded at startup via `preloadAllImages()` and cached by the service worker on first fetch. Changes to `sw.js` require a version bump in the `CACHE_NAME` constant to invalidate old caches.

## Language

All UI text, data content, and comments are in **Spanish**. Keep this consistent when adding or editing content.
