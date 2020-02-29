import {
    React,
    ReactDOM,
  } from "https://unpkg.com/es-react";

const client = React.createElement('h1', {}, 'client');
const header = React.createElement('h1', {}, 'header');

ReactDOM.hydrate(client, document.getElementById('app'), () => {
    console.log('body heydrated');
});

ReactDOM.hydrate(header, document.getElementById('header'), () => {
  console.log('header hydrated');
});