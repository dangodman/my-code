# 单例模式


-类和对象
  -JS 本身没有类
  class + new 不是必须的 JS 有对象字面量和原型链
  function + prototype 
  es6 js 用起来像java   class 
  - 类是抽象的,对象也是具体
      一个类的两个实例, 不是同一个对象
  - 如何让s1 === s2 

- 百度考题
  不管new多少次，它都只给你返回第一次所创建的那唯一的一个实例
- 一般的面向对象 设计模式 23种常见模式，大型项目开发中常年积累下来解决中大型面向对象设计的范式。
- 如何实现单例模式
    -static方法 可以不用直接new
    -返回值就是第一次且唯一一次new的实例，挂载在类上