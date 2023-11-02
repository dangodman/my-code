/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const obj = {}
  const len = rings.length
  const arr = rings.split('')
  const arr2 = new Array(len / 2)
  let j = 0
  console.log(arr)
  for (let i = 1; i < len / 2 + 1; i++) {
    j = arr[2 * i]
    console.log(j)
    // console.log(arr[2 * i - 1])
    arr2[j] = arr[j] + arr[2 * i - 1]
  }
  // console.log(arr2)

}

let rings = "B0B6G0R6R0R6G9"

countPoints(rings)