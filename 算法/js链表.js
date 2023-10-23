function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const dummyHead = new ListNode(-1)
const l1 = new ListNode(1,2)
console.log(dummyHead);
console.log(l1);