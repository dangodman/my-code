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
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason } 
    
    // 返回一个promise
    const newPromise  = new MyPromise((resolve,reject) => {
      if(this.state === 'fulfilled'){   // then前面的promise对象状态是同步变更完成了
        setTimeout(() => {  // 官方是微任务，我们用宏任务简化一下
          try { 
            const result = onFulfilled(this.value)
          resolve(result)  // 应该放result里面的resolve中的参数
          }catch(error){
            reject(error)
          }
        })
      }
      if(this.state === 'rejected') {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason)
            resolve(result)
          }catch(error){
            reject(error)
          }
        })
      }
      if(this.state === 'pending') {  // 缓存then中的回调
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {  // 保障将来onFulfilled在resolve中被调用时是一个异步操作
          try {
            const result = onFulfilled(value)
            resolve(result)
          }catch(error){
            reject(error)
          }
          })
        })
        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {  // 保障将来onRejected在resolve中被调用时是一个异步操作
          try {
            const result = onRejected(reason)
            resolve(result)
          }catch(error){
            reject(error)
          }
          })
        })
      }
    })
    return newPromise
  }

  // 手写promise.then
  static race(promises) {
    return new MyPromise((resolve,reject) => {
      // 看promise里面的哪个对象的状态先变更
      for(let promise of promises) {
        promise.then((value) => {
          resolve(value)
        },
        (reason) => {
          reject(reason)
        }
        )
      }
      resolve()
    })
  }

  static all(promises) {
    return new MyPromise((resolve,reject) => {
      let values = [],count = 0
      for(let i = 0; i < promises.length; i++) {
        promises[i].then((value) => {
          count++
          values[i] = value
          if(count === promises.length) {
            resolve(values)
          }
        },
        (reason) => {
          reject(reason)
        })
      }
    })
  }
  static any(promises) {
    return new MyPromise((resolve,reject) => {
      let count = 0,errors = []
      for(let i = 0;i<promises.length;i++) {
        promises[i].then((value) => {
          resolve(value)
        },
        (reason) => {
          count++
          errors[i] = reason
          if(count === promises.length) {
            reject(new AggregateError(errors))
          }
        }
        )
      }
    })
  }
}


// let p = new MyPromise((resolve,reject) => {
//  // resolve('1')
// })
// p.then()
// console.log(p);


function a() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('a')
      resolve('a')
    },1000)
  })
}

function b() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('b')
      resolve('b')
    },500)
  })
}

MyPromise.all([a(),b()]).then((res) => {
  console.log(res);
})