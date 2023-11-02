// 对象的创建
const obj = {}  // 1.对象字面量

const obj1 = new Object() // 2.构造函数
// console.log(obj1)

// 3. 自定义构造函数

//  构造函数就像工厂，可以批量化生产对象
function Car(color){
  this.name = 'BMW'
  this.height= '1400'
  this.lang = '4900'
  this.weight = 1000
  this.color = color
}

let car1 = new Car('pink') //实例对象
let car2 = new Car('green')
// car1.name = '玛莎'
console.log(car1)
console.log(car2)