# es-react-ssr

A bleeding edge minimal and buildless React server side rendering example.

Please note you must be on Node 13 or have the experimental modules flag enabled.

```js
npm install
```

```js
node index.js
```

Features/philosophies

* No transpilation
* Selective hydration
* Support rendering at startup and runtime on server
* Module preload react as entry point
* Make React the only JS entry point
* Import maps and snowpack for managing dependencies

Workarounds/tradeoffs

* Using es-react from unpkg as entry point