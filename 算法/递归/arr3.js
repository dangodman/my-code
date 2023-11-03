// var arr = [1,2,3,4,5,6,7]

// var sum = arr.reduce(function (pre,item,index,arr){
//   console.log(pre,item)
//   return pre + item
// },0)

// console.log(sum)

var arr = [1, [2, [3, 4]]]
function flatten(arr) {
  return arr.reduce(function (pre, item) {
    return pre.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

console.log(flatten(arr))


