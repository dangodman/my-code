// 和数据库连接的相关操作
const mysql = require("mysql2");
const config = require("../config");

// 创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USER,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
});

// 连接mysql
const allService = {
  query: function (sql, values) {
    // pool 连接
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          // 执行sql语句
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              connection.release(); // 释放连接
              resolve(rows);
            }
          });
        }
      });
    });
  },
};

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username = '${username}' and password = '${password}'`;
  return allService.query(_sql);
};

// 注册
const userRegister = (username, password, nickname) => {
  let _sql = `insert into users(username,password,nickname) values('${username}','${password}','${nickname}')`;
  return allService.query(_sql);
};
// 查询是否有该用户
const userExist = (username) => {
  let _sql = `select * from users where username = '${username}'`;
  return allService.query(_sql);
};

// 根据类型查找笔记列表
const findNoteListByType = (note_type) => {
  let _sql = `select * from note where note_type = '${note_type}'`;
  return allService.query(_sql);
};

// 根据id查找笔记
const findNoteById = (note_id) => {
  let _sql = `select * from note where id = '${note_id}'`;
  return allService.query(_sql);
};

// 添加笔记
const NotePublishVue = (values) => {
  let _sql = `insert into note(note_content,title,head_img,note_type,nickname,userId,c_time,m_time) values('${values.content}','${values.title}','${values.head_img}','${values.note_type}','${values.nickname}','${values.userId}','${values.c_time}','${values.m_time}')`;
  return allService.query(_sql)
};

module.exports = {
  userLogin,
  userRegister,
  userExist,
  findNoteListByType,
  findNoteById,
  NotePublishVue,
};
