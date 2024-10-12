// service-worker.js

const CACHE_NAME = 'quote-app-cache-v1';
const urlsToCache = [
  '/',
  './index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/img/destroyedCar.jpg',
  '/img/marlaDango.jpg',
  '/img/circuloCirco.jpg',
  '/img/serratura.jpg',
  '/img/casetta.jpg',
  '/img/plafond.jpg',
  '/img/theShow.jpg',
  '/img/alba.jpg',
  '/img/botanicNight.jpg',
  '/img/giostra.jpg',
  '/img/concert.jpg',
  '/img/airport.jpg',
  '/img/mountains.jpg',
  '/img/lake.jpg',
  '/img/garda.jpg',
  '/img/gardaLake.jpg',
  '/img/clouds.jpg',
  // Add other static assets like images, fonts, etc.
];

// Install service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate the service worker and remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Removing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch assets from cache or network
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/moods/')) {
    // Cache API responses
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          return (
            response ||
            fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
          );
        });
      })
    );
  } else {
    // Cache static assets
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
