import Vue from 'vue';
// import app from './app.vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter)

// const vm = new Vue({
//     render: h => h(app)
// }).$mount('#app');

const vm = new Vue({
    template: '<div>Hello Vue SSR</div>'
})

export default vm