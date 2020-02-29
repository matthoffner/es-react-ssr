import path from 'path';
import express from 'express';
import React from './react.cjs';
import ReactDOM from './react-dom-server.cjs';

const startupComponent = ReactDOM.renderToString(React.createElement('h1', {}, 'loading'));

const importMap = `<script defer src='web_modules/es-module-shims.js'></script><script type='importmap-shim' src='web_modules/import-map.json'></script>`;
const srcBundle = `<script defer type='module-shim' src='/src/index.js'></script>`;
const reactUrl = 'https://unpkg.com/es-react';

const { PORT = 3000 } = process.env;
const app = express();

app.use('/web_modules', express.static(path.resolve(process.cwd(), 'web_modules')));

app.use('/src', express.static(path.resolve(process.cwd(), 'src')));

app.use('/', async (req, res) => {
    const component = React.createElement('h1', {}, 'server');
    res.set('Link', `<${reactUrl}>; rel=modulepreload; as=script`);
    res.type('html');
    res.write(`<html><head>${importMap}</head><div id='header'>${startupComponent}</div><div id='app'>`);
    res.flushHeaders();
    await new Promise(r => setTimeout(r, 2000)); // simulate slow call
    const rendered = ReactDOM.renderToNodeStream(component);
    rendered.pipe(res, { end: false });
    rendered.on('end', () => {
      res.write('</div>')
      res.write(srcBundle);
      res.write('</body></html>');
      res.end();
    })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
