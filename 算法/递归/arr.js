// 面试题
var arr = [1, [2, [3, 4]]]   // [1,2,3,4]

var newArr = arr.flat(Infinity)  // 数组扁平化 将复杂的数组结构转化为一维数组  Infinity关键字 表示无穷大
console.log(newArr)