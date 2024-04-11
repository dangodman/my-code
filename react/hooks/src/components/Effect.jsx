import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dante");
  useEffect(() => {
    // console.log(`当前点击了 ${count}次`);
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {  // 会在组件卸载的时候被触发
      console.log("组件卸载");
      // 清楚副作用
      clearInterval(timer);
    };
  }, [count]);
  useEffect(() => {
    console.log(`name变成了 ${name}`);
  }, [name]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName("weiwei")}>{name}</button>
    </div>
  );
};

export default Effect;
