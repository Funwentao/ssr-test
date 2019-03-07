import Router from 'vue-router'

const home = () => import('../views/Home.vue')
const about = () => import('../views/About.vue')

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [{
            path: '/',
            component: home
        }, {
            path: '/about',
            component: about
        }]
    })
}