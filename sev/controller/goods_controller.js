// 引入表
const Goods = require('../model/goods_schema')

// async声明一个异步函数
async function findGoods (ctx) {
    // 创建数据
    let goodsItem = new Goods({
        name:'瓜子',
        desc:'五香的',
        price:99
    })
    await goodsItem.save().then(res => {
        console.log(res)
        ctx.body = {
            code:200,
            text:'操作成功',
            data:res
        }
    }).catch(err => {
        cosnoel.log(err)
        ctx.body = {
            code : 400,
            text:'操作失败',
            data:null
        }
    })
}

// 暴露接口
module.exports = {
    findGoods
}