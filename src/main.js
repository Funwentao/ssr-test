import Vue from 'vue'
import App from './app.vue'
import vueRouter from 'vue-router'
import {createRouter} from './router'

Vue.use(vueRouter)

export function createApp() {
    const router = createRouter()
    const app = new Vue({
        router,
        render: h => h(App)
    })

    return { app, router }
}