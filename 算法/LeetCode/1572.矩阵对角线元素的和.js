/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum1 = 0
  let sum2 = 0
  let total = 0
  const len = mat.length
  for (let i = 0; i < len; i++) {
    sum1 += mat[i][i]
    sum2 += mat[i][len - 1 - i]
  }
  if (len % 2 == 0) {
    total = sum1 + sum2
  } else {
    const cen = Math.floor(len / 2)
    total = sum1 + sum2 - mat[cen][cen]
  }
  return total
};

mat = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]
console.log(diagonalSum(mat));