export default ({ isClient }) => html`<h1>header logged ${isClient ? 'in' : 'out'}<${MaterialUI.Button}>test</></h1>`;
