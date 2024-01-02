const Koa = require('koa')

const app = new Koa()

const main = (ctx) =>{
  const n = Number(ctx.cookies.get('view') || 0) + 1
  ctx.cookies.set('view',n)
  ctx.body = n + 'view'
}

app.use(main)

app.listen(3001, () => {
  console.log('server is running at port 3001')
})