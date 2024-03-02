class MyPromise {
  constructor(executor) {
    this.state = 'pending'   // promise的状态
    this.value = undefined   // 接收resolve的参数
    this.reason = undefined  // 接收reject的参数
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => {
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
        // 把then中的回调触发掉 
        this.onFulfilledCallbacks.forEach(cb => cb(value))
      }
    };
    const reject = (reason) => {
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(cb => cb(reason))
      }
    };

    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    // 把 onFulfilled 存起来 供resolve调用
  }
}


let p = new MyPromise((resolve,reject) => {
  // resolve('1')
})
p.then()
console.log(p);