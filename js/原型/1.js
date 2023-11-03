// Person.prototype 原型  也是对象

Person.prototype.say = function (){
  return this.name + '今年' + this.age + '岁了'
}
function Person(){
  this.name = '肖总'
  this.age = 18
}


let p1 = new Person()
let p2 = new Person()

console.log(p1.say())

