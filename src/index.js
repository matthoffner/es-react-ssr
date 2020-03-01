import header from './header.js';
import home from './home.js';
import about from './about.js';

const Router = {
  '/': home,
  '/about': about,
  '*': home
}

async function load() {
  return Router[window.location.pathname];
}

async function init() {
  ReactDOM.hydrate(await load().then(render => render({ isClient: true })), document.getElementById('app'), () => {
    console.log('body hydrated');
  });

  ReactDOM.hydrate(await header({ isClient: true }), document.getElementById('header'), () => {
    console.log('header hydrated');
  });
}

init();