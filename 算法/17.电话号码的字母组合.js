/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == '') return []
  const res = []
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const dfs = (curStr, i) => {
    if (i > digits.length - 1) {
      res.push(curStr)
      return
    }
    const letters = obj[digits[i]]
    for (const l of letters) {
      dfs(curStr + l, i + 1)
    }
  }
  dfs("", 0)
  return res
}
console.log(letterCombinations('23'))