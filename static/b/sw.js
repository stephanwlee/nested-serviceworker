console.log('B sw load');
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('B sw: ', event.request.url);
        return fetch(event.request);
      })
    );
});

