# typeof
1. 可以准确判断出null之外的原始类型
2. 可以判断function


# instanceof
1. 只能判断引用类型
2. 且是通过原型链查找来判断的


# Object.prototype.toString.call(xxx) 

1. If the this value is undefined, return "[object Undefined]".
2. If the this value is null, return "[object Null]".
3. Let O be the result of calling ToObject passing the this value as the argument.
4. Let class be the value of the [[Class]] internal property of O.
5. Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".


1. 如果这个值为undefined 返回 "[object Undefined]"
2. 如果这个值为null 返回 "[object Null]"
3. 将 O 作为 ToOjbect(this) 的执行结果
4. 让class 成为 O 内部属性 [[Class]] 的值
5. 返回由"[object" 和 class 和 "]" 三部分组成的字符串



# Array.isArray(arr)