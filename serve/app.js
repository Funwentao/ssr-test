const fs = require('fs')
// const Vue = require('vue')
const express = require('express')
const backendApp = express()
const frontendApp = express()
const path = require('path')
const createApp = require('../dist/server.bundle.js').default

// console.log(createApp())
// const vm = require('../src/main').default

// const app = new Vue({
//     data: {
//         msg: 'Hello Vue SSR'
//     },
//     template: `<div>{{msg}}</div>`
// })

// const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8');
// const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
//     template: fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8')
// });
  
const renderer = require('vue-server-renderer').createRenderer()

backendApp.use(express.static(path.join(__dirname, '../dist')))
frontendApp.use(express.static(path.join(__dirname, '../dist')))

backendApp.get('*', (req, res) => {
    const context = {url: req.url}
    
    createApp(context).then(app => {
        renderer.renderToString(app, (err, html) => {
            if(err) {
                if(err.code === 404) {
                    res.status(404).end('page not found')
                } else {
                    res.status(500).end('Internal Server Error')
                }
            } else {
                res.end(html)
            }
        })
    })
})

frontendApp.get('*', (req, res) => {
    let html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    res.end(html)
})

backendApp.listen(8000, () =>{
    console.log('服务器端渲染地址： http://localhost:8000')
})

frontendApp.listen(8001, () =>{
    console.log('浏览器端渲染地址： http://localhost:8001')
})
