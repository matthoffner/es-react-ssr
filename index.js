import stream from 'stream';
import path from 'path';
import express from 'express';
import React from './react.cjs';
import ReactDOM from './react-dom-server.cjs';
import home from './src/home.js';
import about from './src/about.js';
import header from './src/header.js';
import error from './src/error.js';
import footer from './src/footer.js';
import htm from 'htm';
import * as MaterialUI from '@material-ui/core';

const sheetsRegistryStream =
  sheetsRegistry => {
    const cached = {};

    function getFreshStyles() {
        const freshStyles = [];
        const registry = sheetsRegistry ? sheetsRegistry.sheetsRegistry.registry : [];
        registry.forEach(member => {
            const key = member.toString();
            if (!cached[key]) {
                cached[key] = true;
                freshStyles.push(key);

                return;
            }
        });

        return freshStyles;
    }

    return new stream.Transform({
        transform: function appendStyleChunks(chunk, encoding, callback) {
            const subsheet = getFreshStyles().join('');
            if (!!subsheet) {
                this.push(Buffer.from(`<style type="text/css">${subsheet}</style>${chunk.toString()}`));
            } else {
                this.push(Buffer.from(chunk.toString()));
            }
            callback();
        }
    });
}


global.React = React;
global.html = htm.bind(React.createElement);
global.MaterialUI = MaterialUI.default;

const theme = MaterialUI.default.createMuiTheme({
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

const headerStyles = new MaterialUI.default.ServerStyleSheets();
const bodyStyles = new MaterialUI.default.ServerStyleSheets();
const footerStyles = new MaterialUI.default.ServerStyleSheets();
const staticRenderComponent = ReactDOM.renderToString(headerStyles.collect(header({ isClient: false })));
const footerComponent = ReactDOM.renderToString(footerStyles.collect(footer()));
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
      res.write(`<html><head><link rel="icon" href="data:,">${importMap}</head><div id='header'><style>${headerStyles}</style>${staticRenderComponent}</div>`);
      res.flushHeaders();
      await new Promise(r => setTimeout(r, 250)); // simulate slow call 
      const bodyComponent = bodyStyles.collect(html`<${MaterialUI.default.ThemeProvider} theme=${theme}>${dynamicRenderComponent({ isClient: false })}</>`);
      const rendered = ReactDOM.renderToNodeStream(bodyComponent).pipe(sheetsRegistryStream(bodyStyles));
      rendered.pipe(res, { end: false });
      rendered.on('error', (err) => {
        console.log(err);
      });
      rendered.on('end', () => {
        res.write(`<style>${footerStyles}</style>${footerComponent}`);
        res.write(`<script crossorigin src="${reactUrl}"></script><script crossorigin src="${reactDomUrl}"></script>${srcBundle}</div>`)
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
