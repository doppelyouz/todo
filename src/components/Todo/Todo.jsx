import React from 'react'

import './todo.scss'

const Todo = ({title, note, date}) => {
  return (
    <div className='todo'>
        <div className='title'>{title}</div>
        <div className='note'>{note}</div>
        <div className='date'>{date}</div>
    </div>
  )
}

export default Todo;