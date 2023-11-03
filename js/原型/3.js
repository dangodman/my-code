Car.prototype.name = 'BWM'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner, color) {
  this.owner = owner
  this.color = color
}

var car = new Car('浪哥', 'red')
var car2 = new Car('但总', 'black')

// car.name = '红旗'
// Car.prototype.name = '红旗'
// console.log(Car.prototype)
// delete Car.prototype.name
console.log(car)
console.log(car2.name)
