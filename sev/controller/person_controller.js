// async声明一个异步函数
async function findPerson (ctx) {
    ctx.body = 'person find one'
}

// 暴露接口
module.exports = {
    findPerson
}