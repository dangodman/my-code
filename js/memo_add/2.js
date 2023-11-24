var count = 0
var fibonacci = function (n) {
  count++
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}
function memoize(fn) {
  if (typeof fn != 'function') {
    throw new Error("请传入函数")
  }
  const cache = {} // key: value o(1)   空间换时间
  return function () {
    // 唯一性  21,2 21,2 22,1 
    var key = arguments.length + Array.prototype.join.call(arguments, ",")
    if(key in cache){
      console.log("命中缓存");
      return cache[key]
    } else {
      return cache[key] = fn.apply(this, arguments)
    }
  }
}

fibonacci = memoize(fibonacci)
console.time('fibonacci')
fibonacci(30)
console.log(count)
console.timeEnd('fibonacci')