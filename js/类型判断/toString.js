console.log(Object.prototype.toString.call('hello').slice(8, -1))

function isType(s){
  return Object.prototype.toString.call(s).slice(8,-1)
}

if(isType(s) === 'String'){
  
}