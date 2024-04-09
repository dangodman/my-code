import React, { Component } from 'react';
import PChild from './components/PChild.jsx';
class PApp extends Component {
  callback = (newMsg) => {
    console.log('拿到子组件的数据：' + newMsg);
  }
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <PChild cb={this.callback} />
      </div>
    );
  }
}

export default PApp;