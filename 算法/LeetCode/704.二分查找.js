/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return nums.indexOf(target)
};

const nums = [-1,0,3,5,9,12]

console.log(search(nums, 2));