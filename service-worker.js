const cacheName = "nombres-thai-v1";
const filesToCache = [
  "/jeu_nombres_thai_pwa.html",
  "/manifest.json",
  "/icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});