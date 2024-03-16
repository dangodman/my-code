// let arr = ['a', 'b', 'c']
// // let s = arr.splice(1,3,'hello')

// // console.log(s,arr);
// let arr2 = [1,2,3]
// let s = arr.concat(arr)

let arr =[1,2,3,4,5,6]
// let s = arr.find((item,i,arr) => {
//   return item > 4
// })

// console.log(s)
// let arr2 = arr.map((item,i,arr) => {
//   item = item * 10
//   return item
// })

// let s = arr.every((item,i,arr) => {
//   return item > 3
// })
// let some = arr.some((item,i,arr) => {
//   return item > 3
// })
let s = arr.reduce((pre,item,i,arr) => {  // pre = reduce()
  return pre + item 
},0)
