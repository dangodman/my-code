/**
 * @param {number[]} prices
 * @return {number}
 */
// 低买高卖
// 最低的价格买入 最高的价格卖出 贪心算法
var maxProfit = function (prices) {
  // 流程 从自顶向下 递归
  // 当天卖 dp[i] = Math.max(price - min,dp[i-1])
  // 自下向上迭代 dp[i]每一个都可以相信 最优子结构
  // dp[0] = 0
  const len = prices.length
  const dp = new Array(len).fill(0)
  let min = prices[0]
  for (let i = 1; i < len; i++) {
    min = Math.min(prices[i - 1],min)
    dp[i] = Math.max(dp[i - 1], prices[i] - min)
  }
  return dp[len - 1]
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
