var obj = {
  a: 1,
}
function foo() {
  console.log(this.a, ...arguments)
}

// foo.call(obj)

Function.prototype.myCall = function (context, ...arguments) {
  if (!this instanceof Function) {
    throw new TypeError('myCall is not a function')
  }
  context.fn = this
  let res = context.fn(...arguments)  // 触发this隐式绑定规则
  delete context.fn
  return res
}

Function.prototype.myApply = function (context, args = []) {
  if (!this instanceof Function) {
    throw new TypeError('myCall is not a function')
  }
  context.fn = this
  context.fn(...args)  // 触发this隐式绑定规则
  delete context.fn
}
foo.myCall(obj, 1, 2, 3, 4)
foo.myApply(obj, [1, 2, 3, 4])



// function add() {
//   const arr = [...arguments]
//   return arr.reduce((prev, res) => { return prev + res }, 0)
// }
// console.log(add(1,2,3,4,5))