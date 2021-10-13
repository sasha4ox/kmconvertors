const staticCasheName = "convertor-app-v1"

const assetsUrls = [
    "index.html",
    "static/js/bundle.js",
    "static/js/vendors~main.chunk.js",
    "static/js/main.chunk.js",
    ".../src/App.modules.scss",
]


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(staticCasheName).then(cache => {
            cache.addAll(assetsUrls)
        })
    )
    console.log("[service worker] installed")
});

self.addEventListener("activate", async (event) => {
    const cashesNames = await caches.keys()
    console.log("[service worker] activated", cashesNames)
});

self.addEventListener("fetch", event => {

    event.respondWith(casheFirst(event.request))
    console.log("[service worker] fetch", event.request.url)
});

async function casheFirst(request) {
    const cashed = await caches.match(request)
    return cashed ?? await fetch(request)
}