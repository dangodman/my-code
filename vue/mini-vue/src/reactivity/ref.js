import { track, trigger } from "./effect.js";
import { reactive } from "./reactive.js";
export function ref(val) {
  // 将原始类型数据变成响应式  引用类型也可以
  return createRef(val);
}

function createRef(val) {
  // 判断val是否已经是响应式
  if (val.__v_isRef) return val;
  // 将val变为响应式
  return new RefImpl(val);
}
// const age = ref(18)
class RefImpl {
  constructor(val) {
    this.__v_isRef = true; // 给每一个被ref操作过的属性值都添加标记
    this._value = convert(val);
  }
  get value() {
    // 为this对象做依赖收集
    track(this, "value");
    return this._value;
  }

  set value(newVal) {
    if (newVal !== this._value) {
      this._value = convert(newVal);
      trigger(this, "value"); // 触发掉 'value' 上的副作用函数
    }
  }
}

function convert(val) {
  if (typeof val !== "object" || val === null) {
    // 不是对象
    return val;
  } else {
    return reactive(val);
  }
}
