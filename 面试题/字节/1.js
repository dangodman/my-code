let obj = {
  a: 1,
  b: undefined,
  c: {
    n: 2,
  },
};
Object.defineProperty(obj,'d',{
  enumerable: false,
  value: 3,
  writable:true,
  configurable: true
})


// console.log(obj.d);
function hasProperty(obj,key){
  // return obj[key] !== undefined  // 值为undefined的属性就判断不了
  // return Object.keys(obj).includes(key)  // 属性为不可枚举时。判断不了
  // return obj.hasOwnProperty(key)  // 只能判断显式属性 无法判断隐式属性

  return key in obj
}

console.log(hasProperty(obj,'d') ); // true