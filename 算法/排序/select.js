let arr = [2,3,1,4,5]

function selectSort(arr) {   // 不断地缩小区间 在区间中找到最小值 放在区间的最左侧 
  const len = arr.length
  let minIndex
  for(let i=0; i<len; i++) {
    minIndex = i
    for(let j=i;j<len;j++) {
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    if(minIndex != i){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr 
}

console.log(selectSort(arr))