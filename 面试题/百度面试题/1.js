

// 原型

function myNew(Fn) {
  let obj = {}
  obj.__proto__ = Fn.prototype
  Fn.call(obj)
  return obj 
}

myNew(Person)