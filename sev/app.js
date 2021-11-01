const cfg = require('./config')   // 引入配置文件
const Koa = require('koa')   // 引入koa框架
const App = new Koa()        // 将koa对象进行实例化
const mongoose = require('mongoose') // 引入mongoose
const router  = require('./router/router')  // 引入路由模块

// 链接数据库
mongoose.connect(cfg.mgPath)
mongoose.connection.once('open' , ()=>{
    console.log('数据库已连接')
})
mongoose.connection.on('close' , ()=>{
    console.log('数据库链接已断开')
})


App.listen(cfg.svPort)       // 启动服务器

App.use(router.routes(),router.allowedMethods())  // 将接口配置给当前服务器

console.log(`server is running at localhost:${cfg.svPort}`)