let str = 'hello' //string
let num = 123  //number
let flag = false //boolean
let und = undefined //undefined
let nu = null // null
let big = 123n //big number
let s = Symbol('hello') //Symbol 独一无二的


let obj = {}
let arr = []
let fn = function () { }
let date = new Date()

// instanceof 判断引用类型
// console.log(obj instanceof Object)   // true
// console.log(arr instanceof Array)    // true
// console.log(fn instanceof Function)  // true
// console.log(date instanceof Date)    // true
//  console.log(arr instanceof Object);  //true
// // 无法判断原始类型
// console.log(str instanceof String)   // false

console.log(arr instanceof Object)      // true
console.log(arr.__proto__.constructor.name)
console.log(fn.__proto__.constructor.name)
