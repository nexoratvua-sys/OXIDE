const CACHE="night-front-v3";
const ASSETS=["./","./index.html","./style.css","./app.js","./manifest.json","./assets/logo.svg","./assets/builder.svg","./assets/pvp.svg","./assets/farmer.svg","./assets/phone-error.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
