import Router from 'vue-router'

const page = () => import('../views/Page.vue')
const home = () => import('../views/Home.vue')
const about = () => import('../views/About.vue')
const bar = () => import('../views/Bar.vue')
// import bar from '../views/Bar.vue'

export function createRouter() {
    const router =  new Router({
        mode: 'history',
        routes: [{
            path: '',
            name: 'page',
            component: page
        }, {
            path: '/home',
            name: 'home',
            component: home,
            children: [{
                path: '',
                component: page
            }, {
                path: 'bar',
                component: bar
            }]
        }, {
            path: '/about/:id',
            name: 'about',
            component: about
        }]
    })


    router.beforeEach((to, from, next) => {
        // console.log(to, from, next)
        next()
    })

    router.afterEach((to, from) => {
        // console.log(to, from)
    })
    
    return router
}