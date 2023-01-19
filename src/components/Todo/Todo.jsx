import React from 'react'

import './todo.scss'

const Todo = ({title, note, date}) => {
  return (
    <div className='todo'>
        <p>{title}</p>
        <p>{note}</p>
        <p>{date}</p>
    </div>
  )
}

export default Todo;