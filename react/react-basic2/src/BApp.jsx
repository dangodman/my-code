import React from "react";
import BrotherA from "./components/BrotherA";
import BrotherB from "./components/BrotherB";
import {Provider} from './provider.js'

class BApp extends React.Component {
  state = {
    message: "Hello",
  };
  fn = (msg) => {
    console.log(msg);
    this.setState({ message: msg });
  };
  render() {
    return (
      <Provider value={this.state.message}>
        <div>
          {/* <BrotherA cb={this.fn} />
        <BrotherB message={this.state.message} /> */}
          <BrotherB />
        </div>
      </Provider>
    );
  }
}

export default BApp;
