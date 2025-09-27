importScripts("/xjs/__/be5137f2009d077d.js");
importScripts('/mjs/---/c5600bb8._.js');
importScripts('/mjs/---/1f56dc06._.js');
importScripts('/mjs/---/5718d31d.js');

const temu = new UVServiceWorker();
const {
    ScramjetServiceWorker
} = $scramjetLoadWorker();
const jettingwiththatscramifykyk = new ScramjetServiceWorker();

async function handleRequest(event) {
    await jettingwiththatscramifykyk.loadConfig();

    if (temu.route(event)) {
        return await temu.fetch(event)
    } else
    if (jettingwiththatscramifykyk.route(event)) {
        return await jettingwiththatscramifykyk.fetch(event);
    }

    return fetch(event.request);
}

self.addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event));
});

let playgroundData;
self.addEventListener("message", ({
    data
}) => {
    if (data.type === "playgroundData") {
        playgroundData = data;
    }
});

jettingwiththatscramifykyk.addEventListener("request", (e) => {
    if (playgroundData && e.url.href.startsWith(playgroundData.origin)) {
        const headers = {};
        const origin = playgroundData.origin;
        if (e.url.href === origin + "/") {
            headers["content-type"] = "text/html";
            e.response = new Response(playgroundData.html, {
                headers,
            });
        } else if (e.url.href === origin + "/style.css") {
            headers["content-type"] = "text/css";
            e.response = new Response(playgroundData.css, {
                headers,
            });
        } else if (e.url.href === origin + "/script.js") {
            headers["content-type"] = "application/javascript";
            e.response = new Response(playgroundData.js, {
                headers,
            });
        } else {
            e.response = new Response("empty response", {
                headers,
            });
        }
        e.response.rawHeaders = headers;
        e.response.rawResponse = {
            body: e.response.body,
            headers: headers,
            status: e.response.status,
            statusText: e.response.statusText,
        };
        e.response.finalURL = e.url.toString();
    } else {
        return;
    }
});