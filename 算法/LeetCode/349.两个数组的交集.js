/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const arr1 = [...new Set(nums1)]
  const arr2 = [...new Set(nums2)]
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === true) {
      arr.push(arr1[i])
    }
  }
  return arr
}


