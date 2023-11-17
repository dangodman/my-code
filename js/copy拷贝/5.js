let obj = {
  name: '阿伟',
  age: 18,
  like: {
    type: 'coding'
  },
  a: undefined,
  b: null,
  c: function () { },
  d: {
    n: 100
  },
  e: Symbol('hello'),
  f: 123n
}

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj == null) return  //只拷贝引用类型
  let objCopy = new obj.constructor()
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        objCopy[key] = deepCopy(obj[key])
      } else {
        objCopy[key] = obj[key]
      }
    }
  }
  return objCopy
}
console.log(obj)
let newObj = deepCopy(obj)
console.log(newObj);