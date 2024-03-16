# js数组有哪些方法
1. 增: push unshift splice concat
2. 删: pop shift splice slice 
3. 改: reverse sort
4. 查: indexOf lastIndexOf includes find 
5. 遍历: forEach map filter every some reduce 
6. 转换: join



- forEach map 区别
1. map会返回一个新的数组
2. return 无法终止forEach的循环,forEach中没有 break 和 continue


# 2. 字符串有哪些方法
1. 增: concat padStart padEnd
2. 删除: slice substring substr
3. 改: replace repeat  trim  toLowerCase toUpperCase
4. 查: includes indexOf lastIndexOf chatAt()  startWith endsWith
5. 转换: charCodeAt split 

# 3. == 和 === 区别


# 4. 说说js中的类型转换
 - 是什么
  js中有原始类型: xxx 和 引用类型 的区分

 - 显示隐式
  1. 开发中通常需要将一个类型转为另一个类型时通过调用构造函数实现显示类型转换
  2. 当开发中碰到 比较运算符 或者算数运算符时，当符号两边的类型不一致时，js引擎会自动进行类型转换 











# 5. 说说深浅拷贝
  - 是什么
  拷贝指的是将一个对象中的元素复制到一个新的对象中，拷贝又分为浅拷贝和深拷贝，浅拷贝只拷贝对象的引用地址，深拷贝会层层拷贝每一个属性值，不受原对象修改值的影响

  - 浅拷贝常见方法:
  1. Object.assign()
  2. 数组解构
  3. concat
  4. slice

  - 深拷贝常见方法
  1. JSON.parse(JSON.stringify(obj))  ---- 不能拷贝Symbol function undefined 不能处理循环引用和 Bigint

  structuredClone --- 不能拷贝 Symbol function  

  - 函数的拷贝 foo = xx.toString()   new Function(`return ${foo}`).call(xx)  



# 6. 说说你对闭包的理解
  - 是什么
  根据词法作用域的规则，内部函数一定能访问它外部函数的变量，当内部函数对外部函数中的变量存在引用，且被拿到外部函数之外调用，即使外部函数执行完毕，他的执行上下文也无法被完全销毁，而是会将内部函数引用的变量作为一个集合保留在调用栈当中，形成一个集合，该集合被称为闭包

  - 作用
    1. 定义私有变量
    2. 封装模块
    3. 延长变量的生命周期
  
  - 缺点：
  1. 内存泄露