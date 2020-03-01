# es-react-ssr

A bleeding edge minimal and buildless React server side rendering example.

Please note you must be on Node 13 or have the experimental modules flag enabled.

```js
npm install
```

```js
node index.js
```

## Features/philosophies

* No transpilation
* Selective hydration
* Support rendering at startup and runtime on server
* Module preload react as entry point
* Make React the only JS entry point
* Import maps and snowpack for managing dependencies

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