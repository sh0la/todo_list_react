import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

class UserInput extends Component {
  
  static id = 1;
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {needtodo: ''};
    // this.state = {
    //   todolist: []
    // };

    this.getInput = this.getInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({needtodo: event.target.value})

    event.preventDefault();
    this.state = {needtodo: ''}
  }

  getInput(event) {
    console.log(this.state.needtodo)
    event.preventDefault();
    if (this.state.needtodo !== '') {
      let newtodo = {
        needtodo: this.state.needtodo,
        key: UserInput.id++
      }
      
    }
   
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.getInput}>
          <input 
            type="text" 
            value={this.state.needtodo} 
            onChange={this.handleChange} 
            placeholder="Enter your Todo"/>
          <input 
            id='btn'
            type="button" 
            value="Submit" 
            onClick={this.getInput}
            />
        </form>
        <TodoItem value={this.state.needtodo} />
        
      </div>
      
    )
  }
}


export default UserInput;