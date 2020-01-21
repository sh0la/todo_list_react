import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import DoneItem from './DoneItem.js';
import UserInput from '../UserInput';


class Listing extends Component  {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h3>This is a Todo List</h3>
        <ul>
          <li>{this.props.name}</li>
        </ul>
        <h3>Completed List</h3>
  
        <DoneItem />
      </div>
    )
  }
}

export default Listing