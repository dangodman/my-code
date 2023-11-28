let arr = [2,3,1,4,5]

// arr.sort((x,y) => x-y)

// console.log(arr);

function bubbleSort(arr){
  const len = arr.length
  for (let i = 0; i < len; i++){
    for(let j = i + 1; j < len; j++){
      if(arr[i] > arr[j]){
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort(arr))

// function bubbleSort(arr){
//   let len = arr.length
//   let res = []
//   while(arr.length){
//     let min = getMin(arr)
//     res.push(min)
//     arr.splice(arr.indexOf(min), 1)
//   }
//   return res 
// }


// function getMin(array){
//   let min = Infinity
//   let len = array.length
//   for(let i = 0; i < len; i++){
//     if(arr[i] < min ){
//       min = arr[i]
//     }
//   }
//   return min 
// }

// console.log(bubbleSort(arr))

