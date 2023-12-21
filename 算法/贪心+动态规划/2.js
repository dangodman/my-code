// 贪心,总是做出在当前看来是最好的选择 不从整体最优上加以考虑算法得到的是局部最优解
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = Math.max(prices[i] - min, profit)
    } else {
      min = Math.min(min, prices[i])
    }
  }
  return profit
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))