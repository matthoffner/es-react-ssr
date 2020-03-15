export default ({ isClient }) => {
    return html`<div id='home'>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    ${!isClient ? 
                        html`<${Skeleton} variant=${"rect"} width=${210} height=${118}></>` :
                        html`<img style=${{ width: 210, height: 118 }} src=${"https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA"} />`}
                    <${MaterialUI.Box} pt=${0.5}>
                        ${!isClient ? 
                            html`<${React.Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>` : 
                            html`<${MaterialUI.Box} pr=${2}>
                                    <${MaterialUI.Typography} gutterBottom=${true} variant=${"body2"}>
                                        Queen - Greatest Hits
                                    </>
                                    <${MaterialUI.Typography} display="block" variant="caption" color="textSecondary">
                                        Queen Official
                                    </>
                                    <${MaterialUI.Typography} variant=${"caption"} color=${"textSecondary"}>
                                        40 M views * 3 years ago
                                    </>
                                </>`
                        }
                    </>
                </>
            </>
        </>
        <${MaterialUI.Typography}>${isClient ? 'home loaded' : 'home ssr'}</>
    </div>`;
}