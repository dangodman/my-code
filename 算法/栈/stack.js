let stack = []  //只能用数组的push和pop方法
stack.push('东北大板')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('小布丁')
stack.push('钟薛高')

// 出栈
while (stack.length) {
  const top = stack[stack.length - 1]
  console.log('我正在吃',top);
  stack.pop()
}