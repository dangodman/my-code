let s = '{[()]}' // true

var isValid = function (s) {
  const stack = []
  const len = s.length
  if(len % 2!== 0) return false
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < len; i++) {
    const item = s[i]
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item)
    } else {
      // 判断此时的item 是否适配栈顶的元素 ‘{}’ 或 ‘[]’ 或 ‘()’
      // 将栈顶元素取出作为obj的key读取到value判断该value是否===item
      if (obj[stack.pop()]!== item) {
        return false
      } 
    }
  }
  return !stack.length
}