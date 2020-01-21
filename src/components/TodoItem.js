import React from 'react';


function TodoItem(props) {
  console.log(props)

    return (
      <ul>
        <li>{props.value}</li>

      </ul>
    )
}

export default TodoItem;