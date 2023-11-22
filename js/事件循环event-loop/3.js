console.log('script start')
async function async1() {
  await async2()  // 浏览器给await开小灶，让他等待async2执行完毕
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
setTimeout(function () {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })
console.log('script end')

// script start
// async2 end
// Promise
// script end 
// async1 end
// promise1
// promise2
// setTimeout