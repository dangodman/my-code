const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')  // 让koa能解析post参数
const cors = require('koa2-cors')    // 解决跨域
const user = require('./routes/user.js')

//  主要逻辑
// const main = (ctx) =>{
//   ctx.body = 'hello world'
// }

app.use(cors()) // 告诉浏览器允许跨域
app.use(bodyparser())
app.use(user.routes(),user.allowedMethods())


app.listen(3000, () => {
  console.log('项目已启动')
})