const BrotherA  = (props) => {
  const msg = '来自组件A的数据'
  const handler = () => {
    props.cb(msg)
  }
  return (
    <div>
      <h4>子组件A</h4>
      <button onClick={handler}>点击</button>
    </div>
  )
}

export default BrotherA