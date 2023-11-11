/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(a>b){
      b = b.padStart(a.length,'0')
  }else if(a<b){
      a = a.padStart(b.length,'0')
  }
  const len = a.length 
  const arr = []
  for(let i=len-1; i>=0; i--){
    let sum = a[i] + b[i]
    if(sum === '01' || sum === '10'){
      arr.unshift(1)
    } else if (sum === '00'){
      arr.unshift(0)
    }else{

    }
    
    console.log(sum);
  }
}

let a = '11'
let b = '1'
addBinary(a, b);