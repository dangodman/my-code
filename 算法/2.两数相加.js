var addTwoNumbers = function (l1, l2) {
  const arr = []
  if (l1.length > l2.length) {
    l2.forEach(function (item, index) {
      l1[index] += item
    })
    console.log(l1);
    for (let i = 0; i < l1.length; i++) {
      arr[i] = l1[i]
    }

  } else {
    l1.forEach(function (item, index) {
      l2[index] += item
    })
    for (let i = 0; i < l2.length; i++) {
      arr[i] = l2[i]
    }
    console.log(l2);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      if (i < arr.length - 1) {
        arr[i + 1] += Math.floor(arr[i] / 10)
      } else {
        arr.push(Math.floor(arr[i] / 10))
      }
      arr[i] = arr[i] % 10
    }
  }
  return arr
};
const l1 = [9,9,9,9,9,9,9]
const l2 = [9,9,9,9]
console.log(addTwoNumbers(l1, l2));
