// import React, { Component } from "react";

// class CChild extends Component {
//   render() {
//     return (
//       <div>
//         <h4>子组件</h4>
//         <p>CChild --- {this.props.msg}</p>
//       </div>
//     );
//   }
// }

// export default CChild;


function CChild(props) {
  return (
    <div>
      <h4>子组件</h4>
      <p>CChild --- {props.msg}</p>
      <button onClick={props.cb}>按钮</button>
    </div>
  );
}

export default CChild;
