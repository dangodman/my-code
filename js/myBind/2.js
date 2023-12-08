Function.prototype.myCall = function(context, ...arguments){
  if(typeof this!== 'function'){
    throw new TypeError('Error');
  }
  context = context || window;
  context.fn = this
  let args = [...arguments].slice(1)
  return context.fn(...args)
}

let person = {
  name:'dante'
}
function sayName(x){
  console.log(this.name,x)
}

sayName.call(person,2)
sayName.myCall(person,2)