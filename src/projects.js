import fs from 'fs';
const content = fs.readFileSync(`${process.cwd()}/content/projects.md`);

export default () => {
    return (
        html`
    <div id="home">
        <${MaterialUI.Typography} display="block" variant="h2">projects</>
        <div dangerouslySetInnerHTML=${{ __html: marked(content.toString()) }}></div>
    </div>`
    )
};