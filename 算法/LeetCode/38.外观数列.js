/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = "1"
  for(let i=2;i<=n;i++){
      const res = []
      let start = 0
      let pos = 0
      while(pos<str.length){
          while(pos<str.length && str[pos] === str[start]){
              pos++
          }
          res.push('' + (pos - start) + str[start])
          start = pos 
      }
      str = res.join('')
  }
  return str
};