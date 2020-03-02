export default ({ isClient }) => 
    html`<div id='home'><h1>${isClient ? 'home loaded' : 'home ssr'}</h1></div>`;