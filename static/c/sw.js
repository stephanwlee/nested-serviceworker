console.log('C sw load');
self.addEventListener('fetch', function(event) {
  console.log('C sw: ', event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

