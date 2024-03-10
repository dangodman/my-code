const http = require('http')

const server = http.createServer((req,res) => {
  let data = {
    msg:'hello node proxy'
  }
 res.end(JSON.stringify(data))  // 向前端返回数据
})


server.listen(3000,() => {
    console.log('listening on prot 3000')
})