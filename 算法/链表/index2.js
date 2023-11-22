function ListNode(val) {
    this.val = val;
    this.next = null;
}

const index = 10
let node = new ListNode()

for(let i = 0; i < index; i++) {
  node = node.next
}