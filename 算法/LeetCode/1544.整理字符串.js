/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const arr = s.split('')
  let l = 0
  const reg1 = /^[a-z]+$/
  const reg2 = /^[A-Z]+$/
  while (l < arr.length - 1) {
    const c = arr[l]
    if (reg1.test(c) && arr[l + 1] === c.toUpperCase() || reg2.test(c) && arr[l + 1] === c.toLowerCase()) {
      arr.splice(l, 2)
      l = 0
    } else {
      l++
    }
  }
  return arr.join('')
}

s = "kkdsFuqUfSDKK"
console.log(makeGood(s))
// console.log(/^[a-z]+$/.test('a'));