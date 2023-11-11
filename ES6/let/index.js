//  var 声明提升 可以重复声明一个变量 

//  let 不存在声明提升，可以和{}一起形成块级作用域

//  const 声明常量 声明的变量不能修改，否则会报错


let a = 1 
if(true){
  console.log(a)  //暂时性死区
  let a = 2
}


const obj = {
  name:'军儿'
}
obj.name = '陈总'

console.log(obj)