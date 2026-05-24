const CACHE = 'forja-v1';

const PRECACHE = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/storage.js',
  '/js/data.js',
  '/js/themes.js',
  '/js/components.js',
  '/js/app.js',
  '/favicon.svg',
  '/manifest.json',
];

// Instalación: precachear los archivos del app
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activación: borrar caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first para assets propios, network-first para imágenes externas (Pokémon)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Imágenes externas (PokeAPI) → network-first con fallback a cache
  if (url.hostname === 'raw.githubusercontent.com') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Fuentes de Google → cache-first
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
    return;
  }

  // Assets propios → cache-first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
