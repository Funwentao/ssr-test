import {createApp} from './main'

const {app, router} = createApp()

// app.$mount('#app')

router.onReady(() => {
    app.$mount('#app')
})