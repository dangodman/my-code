import React, { useState } from "react";

const State2 = (props) => {
  const [n] = useState(2)
  const [count, setCount] = useState(() => {
    return props.num * n;
  });
  return (
    <div>
      <button onClick={() => setCount + 1}>{count}</button>
    </div>
  );
};

export default State2;
