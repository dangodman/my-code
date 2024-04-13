import React, { useRef,useEffect } from "react";

const Ref = (props) => {
  const h2Ref = useRef(null); // 得到一个可以存放dom结构的对象
  useEffect(() => {
    console.log(h2Ref);
  }, []);
  return (
    <div>
      <h2 ref={h2Ref}>Ref</h2>
    </div>
  );
};

export default Ref;
