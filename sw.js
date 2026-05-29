const CACHE        = 'forja-v5';
const IMAGES_CACHE = 'forja-images-v1'; // Cache permanente para imágenes, sobrevive actualizaciones del app

const PRECACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/storage.js',
  './js/data.js',
  './js/themes.js',
  './js/components.js',
  './js/app.js',
  './favicon.svg',
  './manifest.json',
];

// Instalación: precachear archivos del app
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activación: borrar caches de app viejos, pero conservar el cache de imágenes
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE && k !== IMAGES_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Imágenes Pokémon → cache-first permanente (la URL nunca cambia para el mismo Pokémon)
  if (url.hostname === 'raw.githubusercontent.com') {
    e.respondWith(
      caches.open(IMAGES_CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            cache.put(e.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // Fuentes de Google → cache-first (tipografías no cambian)
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }))
    );
    return;
  }

  // Assets propios (JS, CSS, HTML) → network-first para garantizar versión fresca
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  }
});
