- 位运算 & | 遵守了 &&  || 的含义 可以在二进制层运算 性能更好
- 聊vue patch过程要聊到位运算
    更新
    old  new
    DOM 更新是在浏览器的渲染层
    JS V8 引擎主线程
    ref.a = 1
    ref.b = 2
    path 一次手机所有需要的更新(path) 通知浏览器更新
let num1 = 10  // 1010
let num2 = 5   // 0101

// 位运算
let result = num1 & num2 
console.log(result)