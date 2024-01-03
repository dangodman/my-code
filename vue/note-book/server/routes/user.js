const Router = require("@koa/router");
const router = new Router();
const {
  userLogin,
  userRegister,
  userExist,
} = require("../controllers/mysqlControl.js");

// 定义登录接口

router.post("/login", async (ctx) => {
  // 获取到前端传递的账号和密码，去数据库中效验账号密码的正确性
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);
    if (result.length) {
      // 登录成功
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
      };
      ctx.body = {
        code: "8000",
        msg: "登录成功",
        data,
      };
    } else {
      // 登录失败
      ctx.body = {
        code: "8004",
        msg: "账号或密码错误",
        data: "error",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});

// 定义注册接口
router.post("/register", async (ctx) => {
  // 拿到前端传过来的 username password nickname
  // 在数据库中校验 username 是否存在 如果不存在
  // 在数据库中植入一条新的数据
  const { username, password, nickname } = ctx.request.body;
  try {
    const res = await userExist(username);
    if (res.length) {
      ctx.body = {
        code: "8004",
        msg: "用户名已存在",
        data: "error",
      };
    } else {
      try {
        const result = await userRegister(username, password, nickname);
        console.log(result);
        if (result.affectedRows) {
          // 注册成功
          ctx.body = {
            code: "8000",
            msg: "注册成功",
            data: "success",
          };
        } else {
          // 注册失败
          ctx.body = {
            code: "8004",
            msg: "注册失败",
            data: "error",
          };
        }
      } catch (error) {
        ctx.body = {
          code: "8005",
          data: error,
          msg: "服务器异常",
        };
      }
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});

module.exports = router;
