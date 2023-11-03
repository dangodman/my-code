function mul(n) { // 它就是可以计算阶乘
  return n === 1 ? 1 : n * mul(n - 1)
}


console.log(mul(5))