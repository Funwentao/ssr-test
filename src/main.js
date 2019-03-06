import Vue from 'vue';
import App from './app.vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter)

// const vm = new Vue({
//     render: h => h(app)
// }).$mount('#app');

// const vm = new Vue({
//     data: {
//         msg: 'Hello Vue SSR'
//     },
//     template: `<div>{{msg}}</div>`
// })

// export default vm

export function createApp() {
    const app = new Vue({
        render: h => h(App)
    })

    return { app }
}