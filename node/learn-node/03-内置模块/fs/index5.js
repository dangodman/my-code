const fs = require('fs');


// fs.mkdirSync('./test-dir')
// fs.mkdirSync('./test-dir/data/list',{recursive:true})
// fs.rmdirSync('./test-dir',{recursive:true})

fs.watch('./',{recursive:true},(eventType,filename)=>{
  console.log(`当前文件夹下${filename}文件变更为:${eventType}`)
})