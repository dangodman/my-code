let obj = {
  a:1,
  b:2,
}
let n = obj.a
// 
Object.defineProperty(obj,'c',{  // 数据劫持
  // get() {
  //   return n
  // },
  // set(newVal){
  //   n = newVal
  // },
  enumerable:false,
  writable:false,  // 不可写
  value:100 ,  // 默认值
  configurable:false,  // 是否可配置 (删除)
})

// obj.a = 111
// console.log(obj.a);

console.log(obj.c)


// console.log(obj.a)
// obj.a = 10
// console.log(obj.a);

// for(let key in obj) {
//   console.log(key)
// }