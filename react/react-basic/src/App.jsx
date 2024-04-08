import React from 'react'
import ExitComponent from './components/ExitComponent.jsx'
import ClassComponent from './components/ClassComponent.jsx'

// react18 以前组件的写法
class HelloVue extends React.Component {
  render(){
    return <div>这是一个类组件</div>
  }
}


function HelloReact(){
  const handler = () => {
    console.log('click')
  }
  return(
    <div>
      <div>这是一个函数组件</div>
      <button onClick={handler}>click me</button>
    </div>
  )
}

function App(){{
  return(
    <div className="app">
      <HelloReact />
      <HelloVue />
      <hr />
      <ExitComponent />
      <hr />
      <ClassComponent />
    </div>
  )
}}


export default App