// 斐波那契数列
// 1 1 2 3 5 8 13 21 ... 


function fb(n) {
  // if (n <= 2) return 1
  return n <= 2 ? 1 : fb(n - 1) + fb(n - 2)
}

console.log(fb(6))