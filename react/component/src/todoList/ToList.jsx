import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  state = {
    list:['html','css'],
    input:''
  }
  onSubmit = () => {
    if(!this.state.input) return
    this.setState({
      list:[...this.state.list,this.state.input],
      input:''
    })
  }
  add = (e) => {
    this.setState({
      input:e.target.value
    })
  }
  fn = (id) => {
    this.setState({
      list:this.state.list.filter((item,index) => {
        return index !== id
      })
    })
  }
  render() {
    return (
      <div>
        <header>
          <input type="text" onChange={(e) => this.add(e)} value={this.state.input} />
          <button onClick={() => this.onSubmit()}>提交</button>
        </header>
        <section>
          <TodoItem list={this.state.list} fn={this.fn} />
        </section>
      </div>
    );
  }
}

export default TodoList;