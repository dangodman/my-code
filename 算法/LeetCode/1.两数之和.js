/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 9, 11]
let target = 11
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};
console.log(twoSum(nums, target))
