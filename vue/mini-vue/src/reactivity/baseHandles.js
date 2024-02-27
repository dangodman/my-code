export const mutableHandlers = {
  get: function (target,key,receiver) {  // target 被代理的原对象 key是原对象的键 receiver是代理后的对象
    console.log("target对象被读取值");
    return target[key];
  },
  set: function (target,key,value,receiver) {
    console.log("target对象被修改值",key,value);
    target[key] = value;
    // 更新浏览器的视图 (响应式)
    
  },
};
