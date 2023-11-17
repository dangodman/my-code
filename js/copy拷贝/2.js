// let a = {name:'俊熙'}
// let b = Object.create(a)
// a.name = '军儿'
// console.log(b.name)



// let a = {
//   name: '俊熙',
//   like: {
//     n: 'coding'
//   }
// }
// let b = Object.assign({}, a)
// a.like.n = 'running'
// console.log(b)
// console.log(a == b)

let arr = [1, 2, 3, { a: 10 }]
// let newarr = [].concat(arr)
// let newarr = arr.slice(0)
// let newarr = [...arr]
let newarr = arr.reverse()
arr[3].a = 100
console.log(newarr == arr)
console.log(newarr)