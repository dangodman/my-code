var deleteDuplicates = function(head) {
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let temp = cur.next
      while (temp && temp.next && temp.val === temp.next.val) {
        temp = temp.next
      }
      cur.next = temp.next
    } else {
      cur = cur.next
    }
  }
  return dummy.next

}