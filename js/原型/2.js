//  Car.prototype.name = 'BWM'
//  Car.prototype.lang = 4900
//  Car.prototype.height = 1400
Car.prototype = {
  name: 'BWM',
  lang: 4900,
  height: 1400
}

function Car(owner,color){
  // this.name = 'BMW'
  // this.lang = 4900
  // this.height = 1400
  this.owner = owner
  this.color = color
}

var car = new Car('浪哥','red')
var car2 = new Car('但总','black')


console.log(car)
console.log(car2)
console.log(car.name)
