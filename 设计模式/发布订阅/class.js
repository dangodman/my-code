// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   get toString() {  // get 可以将函数名当成属性调用 类似与vue的computed 
//     return `(${this.x}, ${this.y})`
//   }
//   static foo(){  // 静态方法 类可以访问 实例对象不可以访问
//     return 'foo'
//   }
// }


// let p = new Point(1, 2)
// console.log(p.toString)

class Point {
  _count = 0  // es7以后 去除了constructor  使用_属性名
  get value(){
    return this._count
  }
  set value(val){
    console.log(val,'----');
    this._count = val
  }
}
let p = new Point()
console.log(p.value)
p.value = 1 