import React,{useState,useRef} from 'react';
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
  const ipt = useRef(null)
  const Submit = () => {
    setData([...dataList,ipt.current.input.value])
    console.log(ipt)
  }
  const fn = (i) =>{
    setData(dataList.filter((item,index) => index != i))
  }
  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" ref={ipt} />
        <Button onClick={() => Submit()}>提交</Button>
      </header>

      <section>
        <TotoItem data={dataList} fn={fn}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;