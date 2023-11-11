// let arr = [1,1,2,3,3]
// let obj = {
//   a:1,
//   b:1,
//   c:1
// }

// let set = new Set([1,1,2,2,3,4])

// set.add(5)   //添加元素
// console.log(set)
// console.log(set.size);



//  数组去重
var arr = [1,2,1,1,'1']

// function unique(arr){
//  return [...new Set()]
// }
// var unique = (arr) =>[...new Set()]

// console.log(unique(arr))

let set = new Set([1,1,2,2,3,4])

// set.forEach((item,index,set)=>{
//   console.log(item,index,set)
// })
// console.log(set.has(2))
// for(let item of set){
//   console.log(item)
// }

for(let item of set.entries()){
  console.log(item);
}

