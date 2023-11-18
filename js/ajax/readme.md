# ajax  (async javascript and xml )



# XMLHttpRequest
- ajax状态
0 -- xhr刚刚创建，请求还没发
1 -- open准备完成
2 -- 请求已经发送 客户端接受到了响应头
3 -- 接收到服务器端返回的响应体 正在解析
4 -- 解析完成


- http status
    - 200 -- OK 成功
    - 300 -- Multiple Choices 重定向
    - 301 -- Moved Permanently 永久重定向
    - 302 -- Found 临时重定向
    - 304 -- Not Modified 未修改
    - 400 -- Bad Request 错误请求
    - 401 -- Unauthorized 未授权
    - 403 -- Forbidden 禁止访问
    - 404 -- Not Found 未找到
    - 405 -- Method Not Allowed 方法不允许
    - 500 -- Internal Server Error 服务器内部错误
    - 503 -- Service Unavailable 服务不可用

- 跨域
    - 同源策略
    - 跨域资源共享 CORS
    - JSONP
    - WebSocket

- 跨域的解决方案
    - JSONP
    - CORS
    - WebSocket
    - nginx反向代理
    - 前端路由
    - Node.js 服务器端反向代理
    - Node.js 服务器端反向代理

