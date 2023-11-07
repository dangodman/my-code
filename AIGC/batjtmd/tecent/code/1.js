// console.log('hello world!')
/*
  * @func 返回固定格式的电话号码   
  * @params   array [1,2,3,4,5,6,7,8,9,0]
  * @return (123) 456-7890
  * @author dante
*/

//es6 箭头函数
//对象 函数也是对象
//变量的类型由值决定
let phoneNumber   //弱类型  undefined null  值为空
// 函数表达式
// 简版的函数 箭头函数
phoneNumber = (numbers) =>{
  // return 电话号码字符串 字符串拼接 numbers[i]
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
}
console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));