const Koa = require("koa");

const app = new Koa();

const main = (ctx) => {
  // 只要被app use掉的函数一定具有ctx参数  ctx === koa
  if (ctx.url.startsWith("/home")) {
    ctx.response.type = 'json'
    ctx.body = "<h2>hello world</h2>";
  } else if (ctx.url.startsWith("/detail")) {
    ctx.body = "detail";
  } else {
    ctx.body = "Not Found";
  }
};
app.use(main);

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
