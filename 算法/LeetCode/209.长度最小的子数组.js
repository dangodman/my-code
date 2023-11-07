/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0, i = 0, j = 0, res = nums.length
  const len = nums.length
  while (i < len) {
    sum += nums[i]
    while (sum >= target) {
      res = Math.min(res, i-j + 1)
      sum -= nums[j]
      j++
    }
    i++
  }
  return res
};