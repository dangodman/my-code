// const num1 = 5; // 101
// const num2 = 3; // 011

// const res = num1 | num2;


const num1 = 5 
const num2 = 7

function swap(a,b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  
  return [a,b]
}