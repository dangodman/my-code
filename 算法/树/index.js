const root = {
  val:'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
      left: null,
      right: null
    },
    right: {
      val: 'E',
      left: null,
      right: null
    }
  },
  right: {
    val: 'C',
    left: {
      val: 'F',
      left: null,
      right: null
    },
    right: {
      val: 'G',
      left: null,
      right: null
    }
  }
}



// 先序遍历
function preorder(root){
  if(!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
preorder(root)