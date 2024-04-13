import React,{ useContext } from 'react';
import Con from '../_content';

const ContextChild = (props) => {
  const msg = useContext(Con)
  return (
    <div>
      contextChild -----{msg}
    </div>
  );
};

export default ContextChild;