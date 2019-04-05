console.log('Main sw loaded');
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('Main sw: ', event.request.url);
        return fetch(event.request);
      }
    )
  );
});

