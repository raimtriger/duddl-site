const C="duddl-v13";const A=["./","index.html","manifest.json",
"assets/sabaq.woff2","assets/onest.woff2","assets/onest-bold.woff2","assets/martianmono.woff2",
"assets/card_take.mp3","assets/game_intro.mp3","assets/card_fold.mp3","assets/icon-192.png","assets/icon-512.png","assets/apple-touch-icon.png","assets/favicon-32.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;if(new URL(e.request.url).origin!==location.origin)return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
var cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res;}).catch(()=>caches.match("index.html"))));});