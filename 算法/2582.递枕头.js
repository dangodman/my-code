/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  if (n > 1 && time > 0) {
    return passThePillow(n - 1, time - 1)
  } else{
    return passThePillow(n + 1, time - 1)
  }
}


console.log(passThePillow(4,5))