import React, { useState } from "react";

const State = () => {
  let [count, setCount] =  useState(0);
  const [title,setTitle] = useState('hello')
  let num = 1
  // if(num){  // 不可以存放在if或for中
  //   let [flag,setFlag] = useState('true')
  // }
  const add = () => {
    setCount(count + 1);
    setTitle(title + count)
  };
  return (
    <div>
      <h4>title:{title}</h4>
      <button onClick={() => add()}>{count}</button>
      {/* <h3>{flag}</h3> */}
    </div>
  );
};

export default State;
