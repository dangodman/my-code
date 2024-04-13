import React, { useContext } from 'react';
import ContextChild from './ContextChild';
import Con from '../_content.js';
const Context = (props) => {
  const msg = useContext(Con);
  return (
    <div>
      <h3>Context-----{msg}</h3>
      <ContextChild />
    </div>
  );
};

export default Context;