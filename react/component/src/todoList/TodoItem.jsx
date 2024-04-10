import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  deleteItem = (id) => {
    console.log(id);
    this.props.fn(id);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => this.deleteItem(index)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoItem;
