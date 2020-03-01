# es-react-ssr

A modern React server side rendering example.

This example is built to handle dynamic server side rendering, meaning content is dynamically fetched based on the url.

There are many intricicies that determine the use case of this type os setup. Eventually caching with a CDN will be added.

Please note you must be on Node 13 or have the experimental modules flag enabled.

```js
npm install
```

```js
node index.js
```

## Server loading sequence

1. Render above the fold component to string at startup (`staticRenderComponent`)
2. Check if page exists immediately
3. Load import map and html boilerplate
4. `modulepreload` scripts
5. Server render above the fold component (`dynamicRenderComponent`)
6. Await on slowest network call
7. Server render rest of page
8. Load scripts

## Bells and whistles

1. Material UI SSR
2. Apollo