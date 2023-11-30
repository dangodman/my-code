// node 内置的模块化系统 commonJS
// fs 文件模块 内置的 
const fs = require('fs')
// - 硬盘到内存
// - 文件大小
fs.readFile('./a.txt','utf-8',((error,data) => {
  // 后端 稳定性第一
  if(error){
    console.log(error)
    return
  }
  // Buffer 二进制流
  console.log(data)
  fs.readFile('./b.txt','utf-8',((error,data2) => {
    if(error){
      console.log(error)
      return
    }
    console.log(data2)
    fs.readFile('./c.txt','utf-8',((error,data3) => {
      if(error){
        console.log(error)
        return
      }
      console.log(data3)
    }))
  }))
}))
