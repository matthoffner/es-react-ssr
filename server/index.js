import fs from 'fs';
import stream from 'stream';
import http2 from 'http2';
import React from 'react';
import ReactDOM from './react-dom-server.cjs';
import htm from 'htm';
import sheetsRegistryTransfomer from './sheets-registry-transformer.cjs'
import zlib from 'zlib';
import home from '../src/home.js';
import about from '../src/about.js';
import header from '../src/header.js';
import error from '../src/error.js';
import footer from '../src/footer.js';
import { theme } from '../src/theme.js';

import ApolloClient from './apollo-client.cjs';
import { default as MaterialUI } from '@material-ui/core';
import { default as InMemoryCache } from 'apollo-cache-inmemory';
import { default as ReactApollo } from 'react-apollo';
import { default as Lab } from '@material-ui/lab';

global.React = React;
global.html = htm.bind(React.createElement);
global.MaterialUI = MaterialUI;
global.Skeleton = Lab.Skeleton;

const materialUITheme = MaterialUI.createMuiTheme(theme);

const Router = {
  '/': home,
  '/about': about,
  '': home
}

const headerStyles = new MaterialUI.ServerStyleSheets();
const bodyStyles = new MaterialUI.ServerStyleSheets();
const footerStyles = new MaterialUI.ServerStyleSheets();
const headerComponent = ReactDOM.renderToString(headerStyles.collect(header({ loggedIn: false })));
const footerComponent = ReactDOM.renderToString(footerStyles.collect(footer()));

const entryPoint = '/src/index.js';
const importMap = `<script defer src='web_modules/es-module-shims.js'></script><script type='importmap-shim' src='web_modules/import-map.json'></script>`;
const srcBundle = `<script defer type='module-shim' src='${entryPoint}'></script>`;

const handler = async (req, res) => {
  if (req.url.match(/(web_modules|src)/)) {
    var output = fs.createReadStream(`${process.cwd()}${req.url}`);
    res.setHeader('Vary', 'Accept-Encoding');
    let acceptEncoding = req.headers['accept-encoding'];
    if (!acceptEncoding) {
      acceptEncoding = '';
    }
    const onError = (err) => {
      if (err) {
        res.end();
        console.error('An error occurred:', err);
      }
    };
    if (/\bbr\b/.test(acceptEncoding)) {
      res.setHeader('Content-Type',  'application/javascript');
      res.writeHead(200, { 'Content-Encoding': 'br' });
      stream.pipeline(output, zlib.createBrotliCompress(), res, onError);
    } else if (/\bgzip\b/.test(acceptEncoding)) {
      res.setHeader('Content-Type', 'application/javascript');
      res.writeHead(200, { 'Content-Encoding': 'gzip' });
      stream.pipeline(output, zlib.createGzip(), res, onError);
    } else if (/\bdeflate\b/.test(acceptEncoding)) {
      res.setHeader('Content-Type', 'application/javascript');
      res.writeHead(200, { 'Content-Encoding': 'deflate' });
      stream.pipeline(output, zlib.createDeflate(), res, onError);
    } else {
      res.setHeader('Content-Type',  'application/javascript');
      res.writeHead(200, {});
      stream.pipeline(output, res, onError);
    }
    return;
  }

  try {
    const dynamicRenderComponent = Router[req.url];
    if (!dynamicRenderComponent) {
      res.writeHead(404);
      const errorComponent = ReactDOM.renderToNodeStream(error({ statusCode: 404 }));
      errorComponent.pipe(res);
      return;
    }
    res.setHeader('Link', `<${entryPoint}>; rel=modulepreload; as=script`);
    res.write(`<html><head><link rel="icon" href="data:,">${importMap}</head><div id='header'><style>${headerStyles}</style>${headerComponent}</div>`);
    res.flushHeaders();

    const client = new ApolloClient.ApolloClient({
      ssrMode: true,
      link: () => {},
      cache: new InMemoryCache.InMemoryCache()
    });
    const Root = dynamicRenderComponent({ isClient: false });
    try {
      await new Promise(r => setTimeout(r, 250)); // simulate slow call 
      await ReactApollo.getDataFromTree(Root);
    } catch (err) {
      console.error(err); /* eslint-disable-line no-console */
    }
    // const data = client.extract();
    const bodyComponent = bodyStyles.collect(html`<${ReactApollo.ApolloProvider} client=${client}><${MaterialUI.ThemeProvider} theme=${materialUITheme}>${Root}</></>`);
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
}

const serverOptions = {
  key: fs.readFileSync(`${process.cwd()}/keys/server.key`),
  cert: fs.readFileSync(`${process.cwd()}/keys/server.cert`)
};

http2
  .createSecureServer(serverOptions, handler)
  .listen(3000, () => {
    console.log("http2 server started on port", 3000);
  });