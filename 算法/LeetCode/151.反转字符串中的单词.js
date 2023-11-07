/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.trim()
  let l = 0, r = 1
  const arr = []
  if(str.length == 1) return s
  while (r < str.length) {
    if (r == str.length - 1  && str[r - 1] !==' ' ) {
      arr.unshift(str.slice(l, r + 1))
    } else if (r == str.length - 1 && str[r - 1] ==' '){
      arr.unshift(str.slice(str.length-1))
    }
      if (str[r] === ' ' && str[l] !== ' ') {
        arr.unshift(str.slice(l, r))
        l = r
        r += 1
      } else if (str[r] === ' ' && str[l] === ' ') {
        l++
        r++
      } else if (str[r] !== ' ' && str[l] === ' ') {
        l++
        r++
      } else {
        r++
      }
  }
  return arr.join(' ')
};

let s = "F R  I   E    N     D      S      "
console.log(s.trim())
console.log(reverseWords(s))