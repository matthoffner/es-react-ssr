import header from './header.js';
import htm from 'htm';
import * as MaterialUI from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import { createElement, Suspense, lazy, Fragment } from 'react';
import { hydrate } from 'react-dom';

window.html = htm.bind(createElement);
window.Fragment = Fragment;
window.MaterialUI = MaterialUI;
window.Skeleton = Lab.Skeleton

import About from './about.js';
import Home from './home.js';
import Projects from './projects.js';

const Router = {
  '/home': {
    component: lazy(() => import('../src/home.js')),
    suspense: () => html`<${Home} isClient=${false} />`
  },
  '/about': {
    component: lazy(() => import('../src/about.js')),
    suspense: About
  },
  '/projects': {
    component: lazy(() => import('../src/projects.js')),
    suspense: Projects
  },
  '*': {
    component: lazy(() => import('../src/home.js')),
    suspense: Home
  }
}
console.log(window.location.pathname);

async function init() {
  hydrate(
    html`
        <${Suspense} fallback=${html`<${Router[window.location.pathname].suspense || Router['*'].suspense} />`}>
          <${Router[window.location.pathname].component} />
        <//>
      `, document.getElementById('home'), () => {
    console.log('body hydrated');
  });
  
  hydrate(await header({ loggedIn: true }), document.getElementById('header'), () => {
    console.log('header hydrated');
  });
}

init();