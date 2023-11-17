var MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 将栈一种的数据倒到栈2中，再出栈
  if (!this.stack2.length) {
    while (this.stack1.length) {
      const item = this.stack1.pop()
      this.stack2.push(item)
    }
  }
  return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let top = this.pop()
  this.stack2.push(top)
  return top
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack1.length && !this.stack2.length
};

let queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.pop())
queue.push(4)
queue.push(5)
console.log(queue.peek())
console.log(queue.pop())
console.log(queue.empty())


