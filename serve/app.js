const Vue = require('vue')
const server = require('express')()
const vm = require('../src/main').default

const app = new Vue({
    data: {
        msg: 'Hello Vue SSR'
    },
    template: `<div>{{msg}}</div>`
})

console.log(app,'app')
console.log(vm, 'vm')


const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('../index.ssr.html', 'utf-8')
})

server.get('*', (req, res) => {
    renderer.renderToString(vm, (err, html) => {
        if(err) {
            console.log(err)
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html)
    })
})

server.listen(8000)
console.log('running on port 8000.........')