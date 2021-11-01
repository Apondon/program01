const mongoose = require('mongoose') // 引入mongoose
const Schema = mongoose.Schema  // 引入schema

// 创建表结构
const Goods = new Schema({
    name:String,
    desc:String,
    price:Number
})

// 暴露表结构
module.exports = mongoose.model('Goods' , Goods)