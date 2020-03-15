import header from './header.js';
import home from './home.js';
import about from './about.js';
import htm from 'htm';
import * as MaterialUI from '@material-ui/core';
import { createElement } from 'react';
import { hydrate } from 'react-dom';

window.html = htm.bind(createElement);
window.MaterialUI = MaterialUI;

const Router = {
  '/': home,
  '/about': about,
  '*': home
}

async function load() {
  return Router[window.location.pathname];
}

async function init() {
  hydrate(await load().then(render => render({ isClient: true })), document.getElementById('home'), () => {
    console.log('body hydrated');
  });
  
  hydrate(await header({ loggedIn: true }), document.getElementById('header'), () => {
    console.log('header hydrated');
  });
}

init();