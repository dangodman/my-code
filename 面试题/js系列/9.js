// var a = 1 

// function bar(){
//   function foo(){  // foo的词法作用域是bar bar的词法作用域是window
//     console.log(this.a);
//   }
//   foo()
// }

// bar()
// let obj = {
//   a:1,
//   foo:foo
// }


// let obj2 = {
//   a:2,
//   obj:obj
// }

let obj = {
  a: 1
}

function foo(x,y){
  console.log(this.a)
  console.log(x + y)
}

foo.call(obj,1,2)