const Router = require("@koa/router");
const router = new Router();
const {
  findNoteListByType,
  findNoteById,
  NotePublishVue,
} = require("../controllers/mysqlControl.js");
const { formateDate } = require("../config/utils.js");

router.post("/findNoteListByType", async (ctx) => {
  const { note_type } = ctx.request.body;
  try {
    const res = await findNoteListByType(note_type);
    ctx.body = {
      code: "8000",
      data: res,
      msg: "查询成功",
    };
  } catch (err) {
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});
router.post("/notedetail", async (ctx) => {
  const { note_id } = ctx.request.body;
  try {
    const res = await findNoteById(note_id);
    ctx.body = {
      code: "8000",
      data: res[0],
      msg: "查询成功",
    };
  } catch (err) {
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});

// 发布笔记
router.post("/publish", async (ctx) => {
  const { note_content, title, head_img, note_type, nickname, userId } =
    ctx.request.body;
  const c_time = formateDate(new Date());
  const m_time = formateDate(new Date());
  console.log("1111");
  try {
    const result = await NotePublishVue({
      note_content,
      title,
      head_img,
      note_type,
      nickname,
      userId,
      c_time,
      m_time,
    });
    if (result.affectedRows !== 0) {
      ctx.body = {
        code: "8000",
        data: "success",
        msg: "发布成功",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "发布失败",
      };
    }
  } catch (err) {
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});

module.exports = router;
