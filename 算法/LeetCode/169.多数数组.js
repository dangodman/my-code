/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length
  if(len === 1) return nums[0]
  nums.sort((a,b)=>a-b)
  let index = len /2
  let l =0,r=0
  while(l<len-1){
      if(nums[l] === nums[r]){
          r++
      }else{
          let count = r-l
          if(count>index) return nums[l]
          l = r 
          r = r+1
      }
  }
}

const nums = [2,2,1,1,1,2,2]