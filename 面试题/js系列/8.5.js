Parent.prototype.getName = function () {
  return this.name
}
function Parent(name){
  this.name = name
}

// Child.prototype = new Parent()  // 原型链继承
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constuctor = Child
function Child(name){
  Parent.call(this,name)  // 构造函数继承
  this.age = 18
}

let c1 = new Child()