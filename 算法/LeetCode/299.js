/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const map = new Map()
  let len = guess.length
  for (let i = 0; i < len; i++) {
    if (!map.has(secret[i])) {
      map.set(secret[i], 1)
    } else {
      let count = map.get(secret[i]) + 1
      map.set(secret[i], count)
    }
  }
  let total = 0
  let x = 0
  for (let i = 0; i < len; i++) {
    if (map.has(guess[i]) && map.get(guess[i]) > 0) {
      total = total + 1
      let count = map.get(guess[i]) - 1
      map.set(guess[i], count)
    }

  }
  for (let i = 0; i < len; i++) {
    if (secret[i] == guess[i]) {
      x = x + 1
    }
  }

  let y = total - x
  let str = x + 'A' + y + 'B'
  return str
};
// let secret = "1807"
// let guess = "7810"
let secret ="1123"
let guess ="0111"
console.log(getHint(secret, guess))
