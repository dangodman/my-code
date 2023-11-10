let str = 'hello' //string
let num = 123  //number
let flag = false //boolean
let und = undefined //undefined
let nu = null // null
let big = 123n //big number
let s = Symbol('hello') //Symbol 独一无二的


let obj = {

}
let arr = []
let fn = function(){}
let date = new Date()


// 判断类型
// typeof 判断基本类型 null 无法判断 但是 fn 又可以判断出来
console.log(typeof str)  // string 
console.log(typeof num) // number
console.log(typeof flag) // boolean
console.log(typeof und)  // undefined 
console.log(typeof nu); // object  唯独null无法判断出来
console.log(typeof big); //bigint
console.log(typeof s);  // Symbol


console.log(typeof obj)  // Object
console.log(typeof arr)  // Object
console.log(typeof fn)   // Function
console.log(typeof date) // Object