# Forja
> Las habilidades que nadie enseña en el colegio.

App web educativa para niños. Vanilla JS puro, sin frameworks, desplegable en GitHub Pages como PWA.

---

## Estructura del proyecto

```
forja/
│
├── index.html              # Shell principal, carga scripts y registra el service worker
├── manifest.json           # Configuración PWA (nombre, colores, iconos)
├── sw.js                   # Service worker (cache offline, estrategia por tipo de recurso)
├── favicon.svg             # Ícono SVG fuente (usado también para generar los PNG)
│
├── css/
│   └── styles.css          # Todos los estilos del proyecto
│
├── js/
│   ├── storage.js          # localStorage: historial de prácticas y persistencia del tema
│   ├── data.js             # Datos: CATEGORIES, CONCEPTS, NOCIVOS, EMOCIONES
│   ├── themes.js           # Temas visuales, mapas de imágenes, glow, tiers, getConceptDisplay()
│   ├── components.js       # Piezas de UI: acordeón, ejercicio, historial, selector de tema
│   └── app.js              # Navegación y renderizado de vistas (Home, Detail, EmotionDetail)
│
└── icons/                  # Iconos PWA generados desde favicon.svg
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png   # iOS (180×180)
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png       # Android home screen
    ├── icon-384x384.png
    └── icon-512x512.png       # Android splash screen
```

---

## Arquitectura JS

Los scripts se cargan en orden de dependencias:

```
storage.js → data.js → themes.js → components.js → app.js
```

| Archivo         | Responsabilidad                                                          |
|-----------------|--------------------------------------------------------------------------|
| `storage.js`    | IIFE con acceso a localStorage. Expone `Storage.*`                       |
| `data.js`       | Arrays de datos puros. No tiene lógica.                                  |
| `themes.js`     | Todo lo visual por tema: URLs, mapas, tiers, glow, `getConceptDisplay()` |
| `components.js` | Funciones que construyen nodos DOM reutilizables                         |
| `app.js`        | Estado global (`window._activeTheme`, etc.), renderizado y navegación    |

---

## Temas visuales

| ID        | Descripción                        | Fuente                                       |
|-----------|------------------------------------|----------------------------------------------|
| `animals` | Emojis de animales representativos | Emojis del sistema (fallback universal)      |
| `pokemon` | Artwork oficial de Pokémon         | PokeAPI GitHub CDN (sin fetch, URL estática) |

---

## Sistema de tiers

Cada concepto acumula prácticas y escala de nivel visualmente:

| Prácticas | Tier   | Color tarjeta  |
|-----------|--------|----------------|
| 0         | —      | Blanco         |
| 1–2       | Bronce | Tierra cálida  |
| 3–5       | Plata  | Azul frío      |
| 6–9       | Oro    | Amarillo vivo  |
| 10+       | Élite  | Violeta oscuro |

El tier afecta la tarjeta en el grid **y** el interior del detalle (mismo fondo, título y stripe).

---

## Secciones de contenido

| Pestaña             | Contenido                                            |
|---------------------|------------------------------------------------------|
| Quién quiero ser    | 25 habilidades positivas con ejercicios registrables |
| Qué quiero evitar   | 8 actitudes nocivas con ejercicios de reconocimiento |
| Cuando me siento... | 10 emociones con herramientas de uso inmediato       |

---

## PWA

- Instalable en iOS y Android desde el navegador
- Funciona offline (cache-first para assets propios)
- Imágenes Pokémon se cachean al primer uso y quedan disponibles offline
- Fuentes de Google también cacheadas

---

## Despliegue en GitHub Pages

1. Subir la carpeta `forja/` a un repositorio GitHub
2. Settings → Pages → Branch: `main` / root (o `/docs` si renombras la carpeta)
3. El service worker requiere HTTPS — GitHub Pages lo provee automáticamente

> ⚠️ El service worker no funciona abriendo `index.html` como archivo local (`file:///`).
> Usa GitHub Pages, un servidor local (`npx serve .`) o Live Server en VS Code.
