// 构造函数
// function Person(name, age, sex) {
//   this.name = name
//   this.age = age
//   this.sex = sex
// }
// let p = new Person('海军','18','boy')
// console.log(p)

function Person(name, age) {
  var that = {}
  that.name = name
  that.age = age
  return that
}
let p1 = Person('陈总','18')
let p2 = Person('子凡','18')
console.log(p1)
console.log(p2)