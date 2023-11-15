/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0 
  for(let i = 0; i < nums.length; i++){
   if(nums[i] !== val){
    nums[slow] = nums[i]
    slow++
   }
  }
  return slow
};

nums = [3,2,2,3,3,4]
console.log(removeElement(nums, 3));