import React, { Component } from 'react';
import CChild from './components/C-Child';
class CApp extends Component {
  state = {
    msg:'这是父组件的数据'
  }
  fn = () => {
    console.log('父组件的fn方法');
  }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <CChild msg={this.state.msg} cb={this.fn} />
      </div>
    );
  }
}

export default CApp;