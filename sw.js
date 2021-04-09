// dit onderdeel word eenmalig gebruikt na het refreshen zal er geen "install" meer komen te staan in de console log
// mocht je iets aan passen in de SW.js zal er opnieuw install komen staan
self.addEventListener("install", e =>{
    e.waitUntil
    (
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
        })
    );
    console.log("installed!");   
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );

    console.log(`Interscepting fetch request for: ${e.request.url}`);
});