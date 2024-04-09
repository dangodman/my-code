# 组件通讯
1. 父子  父组件传值，子组件props接收
2. 子父  父组件传函数，子组件调用，传入实参，父组件接收
3. 兄弟  





1. 父向子传值
function Father() {
  let msg = '这是父组件传递的值'
  return(
    <div>
      <Son msg={msg} />
    </div>
  )
}

function Son(props){
  return(
    <div>
      <p>{props.msg}</p>
    </div>
  )
}

2. 子向父传值
function Father() {
  const [msg, setMsg] = new useState('hello')
  const fn = (newMsg) => {
    setMsg(newMsg)
  }
  return(
    <div>
      <Son fn={fn} />
      <div>子组件传递过来的值----{msg}</div>
    </div>
  )
}

function Son(props){
  let msg = '这是子组件的值'
  return(
    <div>
      <button onClick={() => props.fn(msg)}>点击</button>
    </div>
  )
}


3. 兄弟组件传值  1 > 父 > 2  仓库
