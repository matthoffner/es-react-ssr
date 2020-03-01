import path from 'path';
import express from 'express';
import React from './react.cjs';
import ReactDOM from './react-dom-server.cjs';
import home from './src/home.js';
import about from './src/about.js';
import header from './src/header.js';
import error from './src/error.js';

global.React = React;

const Router = {
  '/': home,
  '/about': about,
  '': home
}

const staticRenderComponent = ReactDOM.renderToString(header({ isClient: false }));
const entryPoint = '/src/index.js';
const importMap = `<script defer src='web_modules/es-module-shims.js'></script><script type='importmap-shim' src='web_modules/import-map.json'></script>`;
const srcBundle = `<script defer type='module-shim' src='${entryPoint}'></script>`;
const reactUrl = 'https://unpkg.com/react@16/umd/react.production.min.js';
const reactDomUrl = 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js';

const { PORT = 3000 } = process.env;
const app = express();

app.use('/web_modules', express.static(path.resolve(process.cwd(), 'web_modules')));

app.use('/src', express.static(path.resolve(process.cwd(), 'src')));

app.use('*', async (req, res) => {
    try {
      const dynamicRenderComponent = Router[req.baseUrl];
      if (!dynamicRenderComponent) {
        res.status(404);
        const errorComponent = ReactDOM.renderToNodeStream(error({ statusCode: 404 }));
        errorComponent.pipe(res);
        return;
      }
      res.type('html');
      res.set('Link', `<${reactUrl}>; rel=modulepreload; as=script, <${reactDomUrl}>; rel=modulepreload; as=script, <${entryPoint}>; rel=modulepreload; as=script`);
      res.write(`<html><head><link rel="icon" href="data:,">${importMap}</head><div id='header'>${staticRenderComponent}</div><div id='app'>`);
      res.flushHeaders();
      await new Promise(r => setTimeout(r, 250)); // simulate slow call 
      const rendered = ReactDOM.renderToNodeStream(dynamicRenderComponent({ isClient: false }));
      rendered.pipe(res, { end: false });
      rendered.on('end', () => {
        res.write(`<script crossorigin src="${reactUrl}"></script><script crossorigin src="${reactDomUrl}"></script>${srcBundle}</div>`)
        res.write('</body></html>');
        res.end();
      })
    } catch {
      const errorComponent = ReactDOM.renderToNodeStream(error({ statusCode: 500 }));
      errorComponent.pipe(res);
      return;
    } 
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
