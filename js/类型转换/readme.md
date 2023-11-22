# 基本数据类型的转换

1. 转布尔值
2. 转数字
3. 转字符串
4. 转对象


# 对象转原始值
- 转字符串 调用的其实就是Object.prototype.toString()
    1. {}.toString() 返回由"Object"和class和"]"组成的字符串
    2. [].toString() 返回由数组内部元素以逗号拼接的字符串
    3. xx.toString()  直接返回字符串字面量

- valueof
    1. 用于转换包装类



# ToPrimitive
  ToPrimitive(obj,Number)  ==> Number({})
  1. 如果obj是基本类型，直接返回
  2. 否则，调用obj的valueOf()，如果得到原始值，则返回
  3. 否则，调用obj的toString()，如果得到原始值，则返回
  4. 否则，抛出TypeError异常

  ToPrimitive(obj,String)  ==> String({})
  1. 如果obj是基本类型，直接返回
  2. 否则，调用obj的toString()，如果得到原始值，则返回
  3. 否则，调用obj的valueOf()，如果得到原始值，则返回
  4. 否则，抛出TypeError异常



# 对象转布尔就是true