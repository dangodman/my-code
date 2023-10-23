/*   解题思路
        1.将两个数组合并
        2.将合并数组进行从小到大排序
        3.计算中位数
*/

var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2];
  arr.sort((a, b) => a - b);
  let total = 0
  if (arr.length % 2 === 1) {
    let index = (arr.length - 1) / 2
    total = arr[index]
  } else {
    total = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  }
  return total.toFixed(5)
};

const nums1 = [1, 2]
const nums2 = [3,4]
console.log(findMedianSortedArrays(nums1, nums2))