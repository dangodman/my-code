/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(amount === 0) return 0
  //  每个目标金额对应的最少硬币个数
  const f = []
  f[0] = 0
  for(let i = 1; i <= amount; i++) {
    f[i] = Infinity   // 不同金额的最小硬币个数
    for(let j =0; j<coins.length; j++) {
      if(i - coins[j] >= 0) {  // 这个硬币是能用的
        f[i] = Math.min(f[i],f[i-coins[j]] + 1)        
      }
    }
  }
  return f[amount] === Infinity ? -1 : f[amount]
}
const coins = [2] 
let amount = 3
console.log(coinChange(coins, amount))