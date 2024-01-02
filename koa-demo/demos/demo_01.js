const Koa = require('koa')

const app = new Koa()

app.listen(3000, () => {
  console.log('server is running at port 3000')
})