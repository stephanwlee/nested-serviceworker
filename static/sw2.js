console.log('Second sw loaded');
self.addEventListener('fetch', function(event) {
  if (!event.request.url.endsWith('faz.json')) {
    console.log('Second sw invoked but will ignore:', event.request.url);
    return false;
  }
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('Second sw: ', event.request.url);
        return fetch(event.request);
      }
    )
  );
});

