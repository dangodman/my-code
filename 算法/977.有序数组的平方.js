/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0, right = nums.length - 1
  let k = nums.length - 1
  const newarr = new Array(nums.length)
  while (left <= right) {
    if (Math.pow(nums[left], 2) < Math.pow(nums[right], 2)) {
      newarr[k] = Math.pow(nums[right], 2)
      right--
    } else {
      newarr[k] = Math.pow(nums[left], 2)
      left++
    }

    k--
  }
  return newarr
};

nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums));