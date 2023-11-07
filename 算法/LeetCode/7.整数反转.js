/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let y = parseInt(x.toString().split('').reverse().join(''))
  if (x < 0) y = -y
  return y > Math.pow(2, 31) - 1 || y < Math.pow(-2, 31) ? 0 : y
};
x = -123
console.log(reverse(x));
