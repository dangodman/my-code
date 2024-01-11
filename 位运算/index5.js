// const num = 5;
// const lNum = num << 2;
// const rNum = num >> 1;
// console.log(lNum);
// console.log(rNum);

// 如何实现一个高效率的整数的乘法和除法

// 5 * 2 + 5;
function multiply(x, y) {
  let result = 0;
  while (y > 0) {
    if (y & 1) {
      // y二进制的最低位是不是1
      result += x;
    }
    x = x << 1;
    y = y >> 1;
  }
  return result;
}

console.log(multiply(5, 3));

function divide(x, y) {
  let result = 0;
  // 二进制方法实现
  while (x >= y) {
    if (x >= y << 1) {
      x -= y << 1;
      result += 1 << 1;
    } else {
      x -= y;
      result += 1;
    }
  }
  return result;
}

console.log(divide(15, 3));
