/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let sum = Infinity
  const arr = []
  for (let i = 0; i < list1.length; i++) {
    let two = 0
    while (two < list2.length) {
      if (list1[i] == list2[two]) {
        if (i + two < sum) {
          arr.pop()
          sum = i + two
          arr.push(list1[i])
        } else if (i + two == sum) {
          arr.push(list1[i])
        }
      }
      two++
    }
  }
  return arr
};
var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
var list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
console.log(findRestaurant(list1, list2))