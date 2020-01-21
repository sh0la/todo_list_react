import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserInput from './UserInput';
import Listing from './components/Listing'
import TodoItem from './components/TodoItem';


class Page extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <UserInput />
        <Listing name="eat potato"/>
  
      </div>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));


