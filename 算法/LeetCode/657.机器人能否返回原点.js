/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0
  let y = 0
  for (i = 0; i < moves.length; i++) {
    if (moves[i] === 'R') {
      x++
    } else if (moves[i] === 'L') {
      x--
    } else if (moves[i] === 'U') {
      y--
    } else {
      y++
    }
  }
  if (x === 0 && y === 0) return true
  return false 
}

let moves = "LL"
console.log(judgeCircle(moves))