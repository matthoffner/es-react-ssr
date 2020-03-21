export default ({ isClient = true }) => {
    return html`<div id='home'>
        <${MaterialUI.Typography} display="block" variant="h2">home</>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    ${!isClient ? 
                        html`<${Skeleton} variant=${"rect"} width=${210} height=${118}></>` :
                        html`<picture>
                                <source srcset="images/ipad.webp" type="image/webp" />
                                <source srcset="images/ipad.jpeg" type="image/jpeg" />
                                <img style=${{ width: 210, height: 118 }} src=${"./images/ipad.jpeg"} />
                            </>`}
                    <${MaterialUI.Box} pt=${0.5}>
                        ${!isClient ? 
                            html`<${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>` : 
                            html`<${MaterialUI.Box} pr=${2}>
                                    <${MaterialUI.Typography} gutterBottom=${true} variant=${"body2"}>
                                        Ipad Pro - 2020
                                    </>
                                    <${MaterialUI.Typography} display="block" variant="caption" color="textSecondary">
                                        Apple
                                    </>
                                    <${MaterialUI.Typography} variant=${"caption"} color=${"textSecondary"}>
                                        40 M views * 1 day ago
                                    </>
                                </>`
                        }
                    </>
                </>
            </>
        </>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    ${!isClient ? 
                        html`<${Skeleton} variant=${"rect"} width=${210} height=${118}></>` :
                        html`<picture>
                                <source srcset="images/ipad.webp" type="image/webp" />
                                <source srcset="images/ipad.jpeg" type="image/jpeg" />
                                <img style=${{ width: 210, height: 118 }} src=${"./images/ipad.jpeg"} />
                            </>`}
                    <${MaterialUI.Box} pt=${0.5}>
                        ${!isClient ? 
                            html`<${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>` : 
                            html`<${MaterialUI.Box} pr=${2}>
                                    <${MaterialUI.Typography} gutterBottom=${true} variant=${"body2"}>
                                        Ipad Pro - 2020
                                    </>
                                    <${MaterialUI.Typography} display="block" variant="caption" color="textSecondary">
                                        Apple
                                    </>
                                    <${MaterialUI.Typography} variant=${"caption"} color=${"textSecondary"}>
                                        40 M views * 1 day ago
                                    </>
                                </>`
                        }
                    </>
                </>
            </>
        </>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    ${!isClient ? 
                        html`<${Skeleton} variant=${"rect"} width=${210} height=${118}></>` :
                        html`<picture>
                                <source srcset="images/ipad.webp" type="image/webp" />
                                <source srcset="images/ipad.jpeg" type="image/jpeg" />
                                <img style=${{ width: 210, height: 118 }} src=${"./images/ipad.jpeg"} />
                            </>`}
                    <${MaterialUI.Box} pt=${0.5}>
                        ${!isClient ? 
                            html`<${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>` : 
                            html`<${MaterialUI.Box} pr=${2}>
                                    <${MaterialUI.Typography} gutterBottom=${true} variant=${"body2"}>
                                        Ipad Pro - 2020
                                    </>
                                    <${MaterialUI.Typography} display="block" variant="caption" color="textSecondary">
                                        Apple
                                    </>
                                    <${MaterialUI.Typography} variant=${"caption"} color=${"textSecondary"}>
                                        40 M views * 1 day ago
                                    </>
                                </>`
                        }
                    </>
                </>
            </>
        </>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    ${!isClient ? 
                        html`<${Skeleton} variant=${"rect"} width=${210} height=${118}></>` :
                        html`<picture>
                                <source srcset="images/ipad.webp" type="image/webp" />
                                <source srcset="images/ipad.jpeg" type="image/jpeg" />
                                <img style=${{ width: 210, height: 118 }} src=${"./images/ipad.jpeg"} />
                            </>`}
                    <${MaterialUI.Box} pt=${0.5}>
                        ${!isClient ? 
                            html`<${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>` : 
                            html`<${MaterialUI.Box} pr=${2}>
                                    <${MaterialUI.Typography} gutterBottom=${true} variant=${"body2"}>
                                        Ipad Pro - 2020
                                    </>
                                    <${MaterialUI.Typography} display="block" variant="caption" color="textSecondary">
                                        Apple
                                    </>
                                    <${MaterialUI.Typography} variant=${"caption"} color=${"textSecondary"}>
                                        40 M views * 1 day ago
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