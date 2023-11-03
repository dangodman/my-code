/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.split(' ')
  let str = ''
  for (let i = 0; i < arr.length;i++){
    if(arr[i] === ''){
      arr.splice(i,1)
      i--
    }
  }
  str = arr[arr.length-1]
  return str.length
};
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))
console.log(lengthOfLastWord('hello world'))

