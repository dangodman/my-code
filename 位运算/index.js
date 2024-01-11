const num1 = 5   // 101

const num2 = 6   // 110 

const res = num1 & num2   // 100


const n = 15 
function test(n){
  if(n <= 0) return false

  return (n & (n - 1))  === 0
}


console.log(test(n))