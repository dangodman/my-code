const Koa = require('koa')

const app = new Koa()

// 洋葱模型
const fa = (ctx,next) =>{  
  console.log('a');
  next()
  console.log('1')
}
const fb = (ctx,next) =>{
  console.log('b');
  next()
  console.log('2');

}
const fc = (ctx,next) =>{
  console.log('c');
  next()
  console.log('3')
}
app.use(fa) // 所有被use的函数都叫中间件函数，中间件执行是有规划的
app.use(fb)
app.use(fc)
console.log('server is running at port 3000')
app.listen(3000, () => {
})