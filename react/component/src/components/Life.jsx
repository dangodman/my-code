import React, { Component, createRef } from "react";

class Life extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    console.log("Life 组件开始加载");
    this.ref = createRef();
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    // this.state.count++
    // this.forceUpdate() // 强制render重新调用
  };
  // componentDidMount(){
  //   console.log('Life 组件挂载完成',this.ref.current);
  // }
  componentDidUpdate() {
    console.log("Life 组件更新完成");
  }
  componentWillUnmount() {
    console.log("Life 组件即将卸载");
  }
  render() {
    console.log("Life 组件开始编译", this.ref.current);
    return (
      <div>
        <h1 ref={this.ref} onClick={() => this.handleClick()}>
          {this.state.count}
        </h1>
      </div>
    );
  }
}

export default Life;
