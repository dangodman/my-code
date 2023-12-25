const fs = require('fs');

// console.log(fs.statSync('./target.md'));
const info = fs.statSync('./pic')

console.log(info.isFile()) // 判定是否是文件
console.log(info.isDirectory()) // 判定是否是文件夹