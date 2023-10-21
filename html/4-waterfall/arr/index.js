var arr = ['a', 'b', 'c', 'd']

// 判断数组中是否含有c
console.log(arr.includes('c')); // true

arr.push('e')
arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
})
const newArr = arr.map((item, index, arr) => {
  return item + '1'
})
console.log(newArr);
console.log(arr.indexOf('h')); //没有该值就返回-1

var arr2 = arr.reverse()  //反转的方法
console.log(arr2);


var numarr = [3,5,7,1,2]
numarr.sort(function(a,b){
  return a-b  // a-b正序排列 b-a倒序排列
})   //sort 将数组从小到大排序，并且不返回新数组,只会修改原数组
console.log(numarr)
var numarr2 = [10,20,30]
var newnum = numarr.concat(numarr2) //合并两个数组的内容
console.log(newnum);