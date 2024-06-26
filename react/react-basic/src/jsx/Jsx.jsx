//  根组件
import './jsx.css'
const songs = [
  {id:1,name:'庐州月'},
  {id:2,name:'千百度'},
  {id:3,name:'等你下课'},
]
const flag = true 
const styleOjb = {
  color:'blue'
}
const showGreen = true
function App(){
  return(
    <>
      <div className="app">
        <h2>hello React</h2>
        <ul>
          {songs.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
        <h3>{flag ? 'react真好玩' : 'vue真不错'}</h3>
        {flag && <a href="#">哈哈哈哈</a>}
        <h2 style={{color:'red'}}>红色字体</h2>
        <h2 style={styleOjb}>蓝色字体</h2>
        <h2 className={showGreen ? 'green' : ''}>绿色字体</h2>
      </div>
      <div>22222</div>
    </>
  )
}


export default App 