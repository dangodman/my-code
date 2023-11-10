function instanceOf(instance,type){
  while(instance.__proto__){
    if(instance.__proto__ === type.prototype){
      return true
    }
    instance = instance.__proto__
  }
  return false 
}
 
console.log(instanceOf([],Array))  // true
console.log(instanceOf([],Object)) // true                                        

