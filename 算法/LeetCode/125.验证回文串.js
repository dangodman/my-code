/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase()
  const reg = /[a-z0-9]/
  const arr = []
  for(let i=0;i<str.length;i++){
      if(reg.test(str[i])){
          arr.push(str[i])
      }
  }
  let str1 = arr.join('')
  let str2 = arr.reverse().join('')
  if(str1 === str2){
      return true
  }else{
      return false
  }
}

let s = '0p0'
console.log(isPalindrome(s))