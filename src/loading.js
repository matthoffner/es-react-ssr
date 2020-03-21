export default ({ isClient = true }) => {
    return html`<div id='home'>
        <${MaterialUI.Typography} display="block" variant="h2">home</>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    <${Skeleton} variant=${"rect"} width=${210} height=${118}></>
                    <${MaterialUI.Box} pt=${0.5}>
                        <${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>
                    </>
                </>
            </>
        </>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    <${Skeleton} variant=${"rect"} width=${210} height=${118}></>
                    <${MaterialUI.Box} pt=${0.5}>
                        <${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>
                    </>
                </>
            </>
        </>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    <${Skeleton} variant=${"rect"} width=${210} height=${118}></>
                    <${MaterialUI.Box} pt=${0.5}>
                        <${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>
                    </>
                </>
            </>
        </>
        <${MaterialUI.Box} overflow=${"hidden"}>
            <${MaterialUI.Grid} container=${true} wrap=${"nowrap"}>
                <${MaterialUI.Box} key=${1} width=${210} marginRight=${0.5} my=${5}>
                    <${Skeleton} variant=${"rect"} width=${210} height=${118}></>
                    <${MaterialUI.Box} pt=${0.5}>
                        <${Fragment}><${Skeleton}></><${Skeleton} width=${"60%"}></></>
                    </>
                </>
            </>
        </>
        <${MaterialUI.Typography}>${isClient ? 'home loaded' : 'home ssr'}</>
    </div>`;
}