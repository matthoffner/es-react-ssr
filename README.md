# es-react-ssr

A modern React server side rendering example. This is an experiment in trying to do a lot of things:

* Use React as an ES module to avoid having to build with babel or webpack
* Use React on the server without requiring babel and Node 13 modules
* Show a real world partial hydration example
* Show a real world dynamic server rendering example
* Demonstrate buildless client config with snowpack and material ui

```js
npm install
```

```js
node server
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
