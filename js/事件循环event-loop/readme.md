# JS 单线程

- 进程 CPU运行指令和保存上下文所需要的时间

- 线程: 进程中的更小的单位，描述了一段指令执行所需的时间

## 浏览器新开一个tab页面 就是新来一个进程
需要多个线程配合才能完成页面的展示
1. 渲染线程（GPU）
2. http请求线程
3. js引擎线程

渲染线程（GPU）和js引擎线程 是互斥的










# JS 单线程
优点: 
  1. 节省内存 节约上下文切换的时间
  2. 单线程没有锁的概念，节省上下文切换啊时间



# 异步
- 宏任务 (macrotask) : 
script
setTimeout
setInterval
setImmediate
I/O
UI-rendering 页面渲染


- 微任务(microtask)
promise.then()
MutationObserver
Process.nextTick()




# event-loop
1. 执行同步代码 （这属于宏任务）
2. 当执行栈为空，去查询是否有异步代码需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务 （这也叫下一轮的event-loop的开启）