import path from 'path';
import express from 'express';
import React from './react.cjs';
import ReactDOM from './react-dom-server.cjs';
import home from './src/home.js';
import about from './src/about.js';

global.React = React;

const Router = {
  '/': home,
  '/about': about,
  '': home
}

const startupComponent = ReactDOM.renderToString(React.createElement('h1', {}, 'loading'));
const entryPoint = '/src/index.js';
const importMap = `<script defer src='web_modules/es-module-shims.js'></script><script type='importmap-shim' src='web_modules/import-map.json'></script>`;
const srcBundle = `<script defer type='module-shim' src='${entryPoint}'></script>`;
const reactUrl = 'https://unpkg.com/react@16/umd/react.production.min.js';
const reactDomUrl = 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js';

const { PORT = 3000 } = process.env;
const app = express();

app.use('/web_modules', express.static(path.resolve(process.cwd(), 'web_modules')));

app.use('/src', express.static(path.resolve(process.cwd(), 'src')));

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(200);
});

app.use('*', async (req, res) => {
    const routeComponent = Router[req.baseUrl];
    if (!routeComponent) {
      return res.sendStatus(404);
    }
    res.type('html');
    res.set('Link', `<${reactUrl}>; rel=modulepreload; as=script, <${reactDomUrl}>; rel=modulepreload; as=script, <${entryPoint}>; rel=modulepreload; as=script`);
    res.write(`<html><head>${importMap}</head><div id='header'>${startupComponent}</div><div id='app'>`);
    res.flushHeaders();
    await new Promise(r => setTimeout(r, 500)); // simulate slow call 
    const rendered = ReactDOM.renderToNodeStream(routeComponent());
    rendered.pipe(res, { end: false });
    rendered.on('end', () => {
      res.write(`<script crossorigin src="${reactUrl}"></script><script crossorigin src="${reactDomUrl}"></script>${srcBundle}</div>`)
      res.write('</body></html>');
      res.end();
    })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
