/**
 * @param {number[]} height
 * @return {number}

 */
var maxArea = function(height) {
  let left = 0 , right = height.length-1, max = 0
  while(left < right){
      let temp = (right-left) * Math.min(height[left],height[right])
      if(temp > max){
          max = temp
      }
      if(height[left]<height[right]){
          left++
      } else {
          right--
      }
  }
  return max
};

const height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));