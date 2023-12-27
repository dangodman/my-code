class EventEmitter {
  constructor() {
    this.event = {}; // 'run' : [Fun]
  }
  on(type, cb) {
    // 订阅一个事件
    if (!this.event[type]) {
      this.event[type] = [cb];
    } else {
      this.event[type].push(cb);
    }
  }
  once(type,cb) {
    // 只订阅一次
    const fn = (...args) => {
      cb(...args)
      this.off(type,fn)
    }
    this.on(type,fn)
  }
  emit(type, ...args) {
    // 发布一个事件
    if (!this.event[type]) {
      return;
    } else {
      this.event[type].forEach((cb) => {
        cb(...args);
      });
    }
  }
  off(type, cb) {
    // 取消订阅
    if (!this.event[type]) {
      return;
    } else {
      this.event[type] = this.event[type].filter((item) => item !== cb);
    }
  }
}

let ev = new EventEmitter();

const fn1 = (a, b) => {
  console.log(a, b,'fn1');
};
const fn2 = (a, b) => {
  console.log(a, b,'fn2');
};
const fn3 = (a, b) => {
  console.log(a, b,'fn3');
};

ev.on("run", fn1)

ev.once("run", fn2)

ev.on("run", fn3)
ev.off("run",fn3)
ev.emit("run", 1, 2)
ev.emit("run", 1, 2)
ev.emit("run", 1, 2)


