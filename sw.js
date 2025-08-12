self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('zap-cache-v2').then(c => c.addAll(['.', 'index.html'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
