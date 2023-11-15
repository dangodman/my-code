/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let lf = 0, rt = nums.length
    while (lf < rt) {
        let mid = lf + Math.floor((rt-lf) / 2)
        if(target < nums[mid]) {
            rt = mid
        }else if(target > nums[mid]) {
            lf = mid+1
        }else{
            return mid
        }
    }
    return -1
};

const nums = [-1, 0, 3, 5, 9, 12]


console.log(search(nums, 9))