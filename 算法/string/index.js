let str = 'abcdefg'
console.log(str[2]);
console.log(str.charAt(2)) //读取字符串身上的值

const arr = str.split('') //将字符串分割成数组
// console.log(arr);
arr.splice(4)
// console.log(arr);
let str1 = arr.join('')  //将数组接成字符串
console.log(str1);

const str2 = 'juejin'
const res = str2.split('').reverse().join('')
console.log(res);


const str3 = 'yesey'
// function ispalindrome(s) {
//   const res = s.split('').reverse().join('')
//   return res === s
// }
function ispalindrome(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i])
  }
  for (let i = 0; i < s.length; i++) {
    if (stack.pop()!== s[i]) {
      return false
    }
  }
  return true
}
console.log(ispalindrome(str3))
console.log(ispalindrome(str3))
console.log(ispalindrome(str3))
console.log(ispalindrome(str3))

