# 手写封装ajax函数 只考虑 get url 思考 同步变异步

- promise
   ajax 是异步，放到promise里面 async await   
   1. Promise实例化 经历一下流程
       - new 该做的 P 初始的状态 state = 'pending'
       - constructor executor 执行
       都是同步的
       -executor 是异步任务的容器
         executor同步 setTimeout/ajax/...异步的 -> EventLoop
         resolve() 时 p.state = fullfilled 
       - 流程怎么办?
          - then 微任务 执行的机会是在p.state pending -> fullfilled 
          - await 比then 更简介 更像同步代码  resolve(data) data交给左边 