// console.log(this)


// var a = 1
// console.log(a)

function identify(){
  return this.name.toUpperCase()   //将小写字母变成大写  toUpperCase
}

function speek(){
  var greeting = "Hello, I'm " + identify.call(this)
  console.log(greeting)
}
var me = {
  name:'Tom'
}
var you = {
  name:'Jerry'
}
// console.log(identify(you))
speek.call(me)

