export default (props) => html`
    <${MaterialUI.Typography}>welcome
        <${MaterialUI.Button}>${props.loggedIn ? 'log out' : 'loading'}</>
    </>`;
