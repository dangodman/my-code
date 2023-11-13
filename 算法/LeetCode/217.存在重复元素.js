/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length-1;i++){
      if(nums[i]===nums[i+1]) return true
  }
  return false
}

let a = 'xderera'
let arr1= [1,2,3,4]
let arr2 = [1,2,3,4]
console.log(arr1 === arr2)
console.log(a.split('').sort())