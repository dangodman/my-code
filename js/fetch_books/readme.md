# 全栈快速一览

- 前端 http 服务 html/css/js
- 后端 接口服务 
    url  json数据
    3000 端口
- 前后端分离
    json-server 快速的把后端数据server启动了
    - npm init -y 后端
    - npm i json -server 给个json文件就可以启动数据服务
        db.json 快速的伪造数据
    - package.json
        script 
        "dev":"json-server --watch db.json"

- restful api  json-server遵守这个规则
    一切皆资源 url设计规则
    资源展示方式 restful api 遵守的
    GET  http://localhost:3000/posts
    GET  http://localhost:3000//posts/:id
    CRUD
    POST http://localhost:3000/posts
    DELETE http://localhsot:3000/posts/3


    为第一篇文章添加一条评论

    - 选择相应的请求方式 + 相关的资源路径 + 请求体 (options)
    - 设计url + 选择方法


    GET /posts/:pid/comments/:cid
