function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a');
      resolve()
    }, 1000)
  })
}


function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('b');
      // resolve()
      reject('error')
    }, 500)
  })
}
function c() {
  console.log('c')
}

Promise.all([a(), b()]).then(c).catch((err)=>{
  console.log(err)
})

// all 必须要接收到的所有的promise状态都为resolve，then才会调用


// Promise.race([a(), b()]).then(c).catch((res)=>{
//   console.log(res)
// }) // 只要有一个promise状态
