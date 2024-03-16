// let a = 1
// let b = a
// a = 2

// let a = {
//   age: 18
// }

// let b = a 
// a.age = 20 
// console.log(b)


// let a = {
//   age: 18,
//   like:[1,2]
// }

// let b = Object.assign({},a)
// a.age = 20
// a.like.push(3)
// console.log(b);

// let a = [1,2,{n:3}]
// let b = [].concat(a)
// let b = [...a]
// let b = a.slice(0)
// a[2].n = 30
// console.log(b)


// let a = {
//   n:1,
//   // m:Symbol(2),  
//   // o:function() {},
//   g:undefined,
//   p:null,
//   j:123n,
//   k:{
//     e:3
//   }
// }
// a.f = a.k
// a.k.e = a.f
// let b = structuredClone(a)
// console.log(b)



function a() {
  console.log('hello world');
}

function copy(fn) {
  let foo = fn.toString()
  return new Function(`return ${foo}`).call(fn)
}
let foo = copy(a)
foo()
