function foo(a, b) {
  console.log(arguments) //类数组
  console.log(Array.from(arguments))  // Array.from() 将类数组转换为真数组
  const arr = [...arguments]
  console.log(arr)
}

foo(1,2,3)