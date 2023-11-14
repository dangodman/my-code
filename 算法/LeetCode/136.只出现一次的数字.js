/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  let count = {};

  for (let num of nums) {
      count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
      if (count[num] === 1) return num;
  }
};
