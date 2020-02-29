import {
    React,
    ReactDOM,
  } from "https://unpkg.com/es-react";

const h1 = React.createElement('h1', {}, 'client');

ReactDOM.hydrate(h1, document.getElementById('app'), () => {
    console.log('hydrated');
});