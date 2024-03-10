const jwt = require("jsonwebtoken");

function sign(option) {
  return jwt.sign(option, "666", {
    // '666' 加盐
    expiresIn: 60, // token的有效时长
  });
}

const verify =() => (ctx, next) => {
  let jwtToken = ctx.req.headers.authorization;
  if (jwtToken) {
    // 校验
    jwt.verify(jwtToken, "666", (err, decode) => {
      if (err) {
        // 前端传过来的token有问题
        ctx.body = {
          status: 401,
          msg: "token过期",
        };
      } else {
        next();
      }
    });
  } else {
    ctx.body = {
      status: 401,
      msg: "请提供token",
    };
  }
}

module.exports = {
  sign,
  verify,
};
