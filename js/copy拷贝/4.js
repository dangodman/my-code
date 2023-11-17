let obj = {
  name: '阿伟',
  age: 18,
  like: {
    type: 'coding'
  },
  a: undefined,
  b: null,
  c: function () {},
  d: {
    n: 100
  },
  e: Symbol('hello'),
  f:123n
}
obj.c = obj.d
obj.d.m = obj.c
console.log(obj);
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);