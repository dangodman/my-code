/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const aeiou = 'aeiou'
  let num = 0
  for (let i = left; i <= right; i++) {
    let s = words[i]
    if (aeiou.includes(s[0]) && aeiou.includes(s[s.length - 1])) {
      num++
    }
  }
  return num
}
let words = ["hey", "aeo", "mu", "ooo", "artro"]
console.log(vowelStrings(words, 1, 4))