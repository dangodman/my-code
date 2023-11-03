var arr = [1, [2, [3, 4]]]
// let str = arr.toString()
// const newArr = str.split(',')
// console.log(newArr)



function faltten(arr){
  return arr.toString().split(',').map(item => +item)
}
console.log(faltten(arr))