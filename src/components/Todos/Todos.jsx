import React from 'react'
import Todo from '../Todo/Todo';

import './todos.scss'

const Todos = ({todos, checkTodo, deleteTodo, editTodo}) => {
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
              editing={todo.editing}
              checkTodo={checkTodo} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo}
              id={todo.id} 
            />
          })
        }
    </div>
  )
}

export default Todos;