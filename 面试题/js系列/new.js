function Car(name){
  this.name = name
  return []
}


function myNew(...args){
  let obj = {}   // 创建一个空对象
  obj.__proto__ = args[0].prototype  // 让obj的隐式原型等于Car的显式原型
  const res = args[0].call(obj,...args.slice(1))  // 将Car的this指向这个新对象，并且将Car中的属性传给Car
  console.log(res);
  return res instanceof Object ? res : obj  // 返回这个新对象
}

let car = myNew(Car,'BMW')
console.log(car)