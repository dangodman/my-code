// 记忆函数 闭包的高级功能
function memoize(fn) {
  if (typeof fn != 'function') {
    throw new Error("请传入函数")
  }
  const cache = {} // key: value o(1)   空间换时间
  return function () {
    // 唯一性  21,2 21,2 22,1 
    var key = arguments.length + Array.prototype.join.call(arguments, ",")
    if(key in cache){
      return cache[key]
    } else {
      return (cache[key] = fn.apply(this, arguments))
    }
  }
}

// common.js 模块化方案
module.exports = memoize