import React from 'react'
import Todo from '../Todo/Todo';

import './todos.scss'

const Todos = ({todos}) => {
  return (
    <div className='todos'>
        {
          todos.map((todo, i) => {
            return <Todo title={todo.title} note={todo.note} date={todo.date} key={i} />
          })
        }
    </div>
  )
}

export default Todos;