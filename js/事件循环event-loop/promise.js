function A() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('异步A执行')
      resolve()
    }, 1000)
  })
}
function B() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('异步B完成')
      resolve()
    }, 500)
  })
}
A().then(() => { //.then虽然默认会返回promise对象，但是当.then的回调有人为返回的promise对象时，.then默认的promise会失效
  return B()
}).then(() => {
  C()
})

function C() {
  setTimeout(function () {
    console.log('异步C执行')
  }, 100)
}