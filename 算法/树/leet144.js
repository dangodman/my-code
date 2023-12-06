var preorder = function(root){
  if(!root) return []
  const res = [] 
  const stack = []
  stack.push(root)
  while(stack.length){
    const top = stack.pop()
    res.push(top.val)
    if(top.right){
      stack.push(top.right)
    }
    if(top.left){
      stack.push(top.left)
    }
  }
  return res 
}

var postorder = function(root){
  if(!root) return []
  const res = [] 
  const stack = []
  stack.push(root)
  while(stack.length){
    const top = stack.pop()
    res.unshift(top.val)
    if(top.left){
      stack.push(top.left)
    }
    if(top.right){
      stack.push(top.right)
    }
  }
  return res 
}