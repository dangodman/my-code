/**
 * @param {string} s
 * @return {number}
 */

// 暴力解法
// var lengthOfLongestSubstring = function (s) {
//   const len = s.length
//   if (len === 0) return 0
//   let res = 1
//   for (let i = 0; i < len; i++) {
//     let current = 1
//     let j = i + 1
//     let currents = s[i]
//     while (!currents.includes(s[j]) && j < len) {
//       current++
//       currents += s[j]
//       j++
//     }
//     res = Math.max(res, current)
//   }
//   return res
// };

// 解法2
// var lengthOfLongestSubstring = function (s) {
//   let obj = {}
//   let res = 1
//   let j = 0  //不重复的字符点的index
//   for (let i = 0; i < s.length; i++) {
//     const value = obj[s[i]]
//     if (value !== undefined) {
//       //j 表示上一次出现的下标+1
//       j = Math.max(value + 1, j)
//     }
//     res  = Math.max(res,i-j+1)
//     obj[s[i]] = i
//   }
//   return res
// };

// 暴力优化
var lengthOfLongestSubstring = function (s) {
  let i=0 ,res = 0
  for(let j = 0; j < s.length; j++) {
    let index = s.slice(i,j).indexOf(s[j])
    if(index === -1) {
      res = Math.max(res,j-i+1)
    } else {
      i = i +index +1
    }
  }
  return res 
}
