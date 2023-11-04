/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let m = Math.floor(num / 10)
  let n = num % 10
  if(m + n >= 10){
    return addDigits(m+n)
  }
  return m + n
};

console.log(addDigits(0))
