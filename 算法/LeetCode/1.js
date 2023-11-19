let arr = [1,1,1,1,2,3,4]
console.log(typeof arr === 'object')

function getArr(arr){
  this.arr = arr
}

getArr.prototype.next = function (){
  this.arr[0].forEach(element => {
    console.log(element)
  });
}

const set = new Set(arr)
console.log(set.has(0))
