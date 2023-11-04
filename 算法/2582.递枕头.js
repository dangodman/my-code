/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let times = n - 1
  let count = time % times
  let end = Math.floor(time / times)
  if (end % 2 === 0) {
    return count + 1
  } else {
    return n - count
  }

}


console.log(passThePillow(4, 5))