const Router = require('koa-router')  // 引入路由模块
const router = new Router()  // 将路由模块实例化

// 引入controller
const goods = require('../controller/goods_controller') // 商品
const person = require('../controller/person_controller') // 用户
// 定义一个get接口

// 商品
router.get('/' , goods.findGoods)
// 用户
router.get('/index' , person.findPerson)

module.exports = router   // 暴露路由接口