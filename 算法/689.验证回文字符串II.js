/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const len = s.length
  let i = 0, j = len - 1
  while (i < j && s[i] === s[j]) {
    i++
    j--
  }
  //  i j
  // 尝试跳过i  或 j
  if(isPalindrome(i+1 ,j)){
    return true
  }
  if(isPalindrome(i,j-1)){
    return true
  }

  function isPalindrome(st,ed) {
    while(st < ed) {
      if(s[st]!== s[ed]) return false
      st++
      ed--
    }
    return true
  }

  return false
}


// 判断回文

// function isPalindrome(s) {
//   const len = s.length
//   for(let i = 0; i < len / 2; i++) {
//     if(s[i]!== s[len - 1 - i]) return false
//   }
//   return true
// }
