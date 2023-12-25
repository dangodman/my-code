//  文件系统
// const fs = require('fs')

// 同步

// const syncData = fs.readFileSync('./data.txt', 'utf-8')
// console.log(syncData)



// 异步
// fs.readFile('./data.txt', {encoding:'utf8'}, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// fs.promises.readFile('./data.txt', {encoding:'utf8'})
//  .then(data => {
//     console.log(data)
//   })
//  .catch(err => {
//     console.log(err)
//   })

const fs = require('fs/promises')
fs.readFile('./data.txt', {encoding:'utf8'})
.then(data => {
   console.log(data)
 })
.catch(err => {
   console.log(err)
 })