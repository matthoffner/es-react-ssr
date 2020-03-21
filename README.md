# 2020-react-boilerplate

Bleeding edge React template with a few key goals:

* Buildless, zero config
* Modern isomorphism
* Blazing fast

```js
npm install
```

On Node 13:

```js
node server
```

Node 8-12:

```js
node --experimental-modules server
```

## Buildless, zero config

For creating new things we want as little friction and complexity as possible. When it comes to server side rendering, there was basically no prior examples of now to do this without adding an additional build step. 

Instead of having a bundler, I've setup snowpack to run which either hosts the dependencies as files in `web_modules` or pulls them from CDN. Since these dependencies never change, it makes little sense to integrate them into my build. Plus, the browser will cache them on repeat visits.

## Modern isomorphism

Isomorphism, or universal javascript was a big movement with React in the last decade. A core part of its inherent complexity was that interopability of javascript between the browser and node.js was impossible.

With Node 13 experimental modules and all modern browsers supporting ES modules, we can finally attempt to achieve the goal of writing the same code between the two. To achieve this in React I needed to avoid `jsx`, opting for `htm` to unlock writing the same code on the server and client.

## Blazing fast

### Progressive rendering (Time to First Byte)

`res.flush()` is sent after preloading the entry script and rendering a static component. Once the headers are flushed, the first byte is sent, and slower blocking requests can be kicked off without impacting TTFB.

```js
res.type('html');
res.set('Link', `<${entryPoint}>; rel=modulepreload; as=script`);
res.write(`<html><head><link rel="icon" href="data:,">${importMap}</head><div id='header'><style>${headerStyles}</style>${headerComponent}</div>`);
res.flushHeaders();
```

Also this project ditches express for using node's built in http/2 module. This unlocks brotli compression via `zlib`.

Included is `picturefill` which allows polyfilling to support `webp` images when possible.

### No Render Blocking Resources (First Contentful Paint)

Progressive rendering will help with first contentful paint, but to optimize CSS we need to ensure there is no blocking CSS. To achieve this `sheets-registry-transformer` is invoked during rendering to extract styles from Material UI react components. This creates the ideal CSS to HTML rendering pattern where stylesheets do not need to be bundled separately.

```js
const rendered = ReactDOM.renderToNodeStream(bodyComponent).pipe(sheetsRegistryTransfomer(bodyStyles));
```

#### Server rendering sequence

1. Render above the fold component to string at startup (`staticRenderComponent`)
2. Check if page exists immediately
3. Load import map and html boilerplate
4. `modulepreload` scripts
5. Server render above the fold component (`dynamicRenderComponent`)
6. Await on slowest network call
7. Server render rest of page
8. Load scripts

### Partial Hydration (First Input Delay)

In order to optimize performance for user interactions, partial hydration is used to minimize the amount of work the browser needs to do. What needs to be hydrated is specific to any app, but by partially selecting, we are able to safely exclude what we know does not need to be.

```js
ReactDOM.hydrate(await header({ loggedIn: true }), document.getElementById('header'), () => {
console.log('header hydrated');
});
```

If the component is below the fold, we can leverage `IntersectionObserver` to lazily hydrate the component once it becomes visible.

## Tools used

* snowpack
* picturefill
* es-module-shims
* importmaps
* htm
* apollo