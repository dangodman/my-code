import React,{useState} from 'react';
import TotoItem from './TodoItem'
import { Input, Button } from 'antd';

// 父组件
const TodoList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  const [dataList,setData] = useState(data)
  const [ipt, setIpt] = useState('');
  const changeIpt = (e) => {
    setIpt(e.target.value)
  }
  const Submit = () => {
    if(ipt.trim() === ''){
      return
    }
    setData([...dataList,ipt.trim()])
  }
  const fn = (val) =>{
    setData(dataList.filter((item) => item !==val))
  }
  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" value={ipt} onChange={(e) => changeIpt(e)} />
        <Button onClick={() => Submit()}>提交</Button>
      </header>

      <section>
        <TotoItem data={dataList} fn={fn}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;