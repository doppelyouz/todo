import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

import './todo.scss'

const Todo = ({title, note, date, checkTodo, id, checked}) => {
  let todoStyles = `todo`;
  if(checked) {
    todoStyles += ' checked';
  }
  return (
    <div className={todoStyles}>
        <div className='title'>{title}</div>
        <div className='note'>{note}</div>
        <div className="controlPanel">
          <button>
            <DeleteIcon className="checkedImg" style={checked ? {backgroundColor: "greenyellow"} : null}/>
          </button>
          <button onClick={() => checkTodo(id)}>
            <CheckIcon className="checkedImg" style={checked ? {backgroundColor: "greenyellow"} : null}/>
          </button>
          <div className='date'>{date}</div>
        </div>
    </div>
  )
}

export default Todo;