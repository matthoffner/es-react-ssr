import header from './header.js';
import htm from 'htm';
import * as MaterialUI from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { createElement, Suspense, lazy, Fragment } from 'react';
import { hydrate } from 'react-dom';
import Loading from './loading.js';

window.html = htm.bind(createElement);
window.Fragment = Fragment;
window.MaterialUI = MaterialUI;
window.Skeleton = Skeleton;

const Router = {
  '/home': {
    component: lazy(() => import('../src/home.js')),
    suspense: Loading
  },
  '/about': {
    component: lazy(() => import('../src/about.js')),
  },
  '/projects': {
    component: lazy(() => import('../src/projects.js')),
  },
  '*': {
    component: lazy(() => import('../src/home.js')),
    suspense: Loading
  }
}

async function init() {
  // only hydrate if route has suspense, otherwise we have to redundantly pass component to fallback
  Router[window.location.pathname].suspense && hydrate(
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