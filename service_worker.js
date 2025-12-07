const CACHE_NAME = 'yash-code-studio-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './html_coder.png'
];

// Install Event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

// Fetch Event (Offline support)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((response) => response || fetch(e.request))
    );
});