import React from 'react'
import Todo from '../Todo/Todo';

import './todos.scss'

const Todos = ({todos, checkTodo, deleteTodo}) => {
  return (
    <div className='todos'>
        {
          todos.map((todo, i) => {
              return <Todo 
              key={i} 
              title={todo.title} 
              note={todo.note} 
              checked={todo.checked} 
              date={todo.date} 
              checkTodo={checkTodo} 
              deleteTodo={deleteTodo} 
              id={todo.id} 
            />
          })
        }
    </div>
  )
}

export default Todos;