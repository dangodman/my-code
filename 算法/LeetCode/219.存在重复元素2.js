/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]
    obj[item] = obj[item] === undefined ? i : Math.abs(i - obj[item])
  }
  console.log(obj)
  // return false
}
let nums = [1, 2, 3, 1]
let k = 3
// console.log(containsNearbyDuplicate(nums, k))
containsNearbyDuplicate(nums, k)