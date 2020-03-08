import stream from 'stream';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from './react-dom-server.cjs';
import home from '../src/home.js';
import about from '../src/about.js';
import header from '../src/header.js';
import error from '../src/error.js';
import footer from '../src/footer.js';
import htm from 'htm';
import { default as MaterialUI } from '@material-ui/core';
import sheetsRegistryTransfomer from './sheets-registry-transformer.cjs'

// set global variables to allow sharing components between server and client
global.React = React;
global.html = htm.bind(React.createElement);
global.MaterialUI = MaterialUI;

const theme = MaterialUI.createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#fff',
    },
    background: {
      default: '#000',
    },
  },
});


const Router = {
  '/': home,
  '/about': about,
  '': home
}

const headerStyles = new MaterialUI.ServerStyleSheets();
const bodyStyles = new MaterialUI.ServerStyleSheets();
const footerStyles = new MaterialUI.ServerStyleSheets();
const staticRenderComponent = ReactDOM.renderToString(headerStyles.collect(header({ isClient: false })));
const footerComponent = ReactDOM.renderToString(footerStyles.collect(footer()));
const entryPoint = '/src/index.js';
const importMap = `<script defer src='web_modules/es-module-shims.js'></script><script type='importmap-shim' src='web_modules/import-map.json'></script>`;
const srcBundle = `<script defer type='module-shim' src='${entryPoint}'></script>`;

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
      res.set('Link', `<${entryPoint}>; rel=modulepreload; as=script`);
      res.write(`<html><head><link rel="icon" href="data:,">${importMap}</head><div id='header'><style>${headerStyles}</style>${staticRenderComponent}</div>`);
      res.flushHeaders();
      await new Promise(r => setTimeout(r, 250)); // simulate slow call 
      const bodyComponent = bodyStyles.collect(html`<${MaterialUI.ThemeProvider} theme=${theme}>${dynamicRenderComponent({ isClient: false })}</>`);
      const rendered = ReactDOM.renderToNodeStream(bodyComponent).pipe(sheetsRegistryTransfomer(bodyStyles));
      rendered.pipe(res, { end: false });
      rendered.on('error', (err) => {
        console.log(err);
      });
      rendered.on('end', () => {
        res.write(`<style>${footerStyles}</style>${footerComponent}`);
        res.write(`${srcBundle}</div>`)
        res.write('</body></html>');
        res.end();
      });
    } catch (err) {
      console.log(err);
      const errorComponent = ReactDOM.renderToNodeStream(error({ statusCode: 500 }));
      errorComponent.pipe(res);
      return;
    } 
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
