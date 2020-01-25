# es-react-ssr

A minimal buildless React server side rendering that leverages Node's ES module support.

Please note you must be on Node 13 or have the experimental modules flag enabled.

To generate react-dom server es module code I used the build step in es-react. [PR here](https://github.com/lukejacksonn/es-react/pull/12)

```js
npm install
```

```js
node index.js
```

## caveats

JSX requires Babel, so `React.createElement()` is used instead

## sources

[es-react](https://github.com/lukejacksonn/es-react)
