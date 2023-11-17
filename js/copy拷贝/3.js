// 浅拷贝的实现原理
let obj = {
  name: '阿伟',
  age: 18,
  like: {
    type: 'coding'
  }
}
let arr = ['a', { n: 1 }, 1, undefined, null]
function shalldowCopy(obj) {
  if (typeof obj !== 'object' || obj == null) return  //只拷贝引用类型
  let objCopy = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = obj[key]
    }
  }
  return objCopy
}
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj == null) return  //只拷贝引用类型
  let objCopy = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] !== 'object' && obj[key] !== null) {
        objCopy[key] = deepCopy(obj[key])
      } else {
        objCopy[key] = obj[key]
      }
    }
  }
  return objCopy
}
let newObj = shalldowCopy(arr)
// obj.like.type = 'swimming'
console.log(newObj);