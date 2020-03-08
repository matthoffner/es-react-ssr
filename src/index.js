import header from './header.js';
import home from './home.js';
import about from './about.js';
import htm from 'htm';

window.html = htm.bind(React.createElement);

const Router = {
  '/': home,
  '/about': about,
  '*': home
}

async function load() {
  return Router[window.location.pathname];
}

async function init() {
  ReactDOM.hydrate(await load().then(render => render({ isClient: true })), document.getElementById('home'), () => {
    console.log('body hydrated');
  });

  const isLoggedIn = true;
  isLoggedIn &&
    ReactDOM.hydrate(await header({ isClient: true }), document.getElementById('header'), () => {
      console.log('header hydrated');
    });
}

init();