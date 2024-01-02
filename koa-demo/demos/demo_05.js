const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const router = new Router();

const logger = (ctx,next) => {
  console.log(`${ctx.url} - ${ctx.method} -${Date.now()}`)
  next()
};
const main = (ctx) => {
  ctx.body = "首页页面";
};
const about = (ctx) => {
  ctx.body = "about page";
};


router.get("/main", main);
router.get("/about", about);


app.use(logger)
app.use(router.routes()); // 所有的配置路由都生效
app.use(router.allowedMethods)
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
