export default (props) => html`
    <${MaterialUI.Typography}><a href="/home">home</a> | <a href="/about">about</a> | <a href="/projects">projects</a>
        <${MaterialUI.Button}>${props.loggedIn ? 'welcome' : 'loading'}</>
    </>`;
