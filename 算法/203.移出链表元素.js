/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const ret = new ListNode(0, head)
  let cur = ret
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return ret.next
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const head = new ListNode(-1)
const data = [1, 2, 6, 3, 4, 5, 6]

for (let i = 0; i < data.length; i++) {
  head.next = new ListNode(data[i], head.next)
}

console.log(head.next);
console.log(removeElements(head.next, 6))