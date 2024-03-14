let n = 900719925474099
let m = 754634524

function sum(a,b) {
  a= a.toString()
  b= b.toString()
  const len = Math.max(a.length,b.length)
  a = a.padStart(len,'0')
  b = b.padStart(len,'0')
  let result = ''
  let carry = 0
  for(let i=len-1;i>= 0;i--) {
    // a[i] b[i]
    let n = +a[i] + +b[i] + carry
    carry = Math.floor(n / 10)

    result = (n % 10) + result 
  }
  if(carry){
    result = '1' + result
  }
  return Number(result)
}

console.log(sum(n,m));
