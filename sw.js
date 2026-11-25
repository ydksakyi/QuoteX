const CACHE = 'quotex-v2';
const SHELL = [
	'./',
	'./index.html',
	'./style.css',
	'./script.js',
	'./manifest.webmanifest',
	'./icon.svg',
	'./icon-maskable.svg',
	'./icon-192.png',
	'./icon-512.png',
	'./icon-maskable-192.png',
	'./icon-maskable-512.png',
	'./og-image.svg',
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE).then((cache) => cache.addAll(SHELL)),
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
			),
		),
	);
	self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	const { request } = event;

	if (request.method !== 'GET') return;

	const isNavigation = request.mode === 'navigate';

	if (isNavigation) {
		event.respondWith(
			fetch(request)
				.then((res) => {
					if (res.ok) {
						const copy = res.clone();
						caches.open(CACHE).then((cache) => {
							cache.put(request, copy);
						});
					}
					return res;
				})
				.catch(() => caches.match('./index.html')),
		);
		return;
	}

	event.respondWith(
		caches.match(request).then((cached) => {
			if (cached) return cached;
			return fetch(request)
				.then((res) => {
					if (res.ok) {
						const copy = res.clone();
						caches.open(CACHE).then((cache) => {
							cache.put(request, copy);
						});
					}
					return res;
				})
				.catch(() => {
					if (
						request.destination === 'image' ||
						request.destination === 'font' ||
						request.destination === 'script' ||
						request.destination === 'style'
					) {
						return new Response(null, { status: 204 });
					}
					return new Response(null, { status: 204 });
				});
		}),
	);
});
