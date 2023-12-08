Function.prototype.myBind = function(context,...args){
    // 函数 this
    console.log(typeof this)
    if(typeof this !== 'function'){
      throw new TypeError('Error')
    }
    context = context || window   // 闭包之中 
    let that = this 
    return function fn(...innerArgs){
      // this 丢失
      if(this instanceof fn){  // new 的方式运行
        return new that(...args,...innerArgs)
      }
      // 原先的函数执行 this手动指定为context
      return that.apply(context,[...args,...innerArgs])
    }
}


function sayHello(x,y,z){
  console.log("函数中的",this)
  console.log("你好",this.name)
  console.log(x + y + z)
}
const arrowFn = () =>{}
let person = {
  name:"李旭",
}
// const f2 = arrowFn.myBind
// f2()
let bindFn = sayHello.myBind(person,1,2)
bindFn(3)