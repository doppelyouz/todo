import React, {useState} from 'react'
import './workSpace.scss'

import InputTodo from '../InputTodo/InputTodo'
import Todos from '../Todos/Todos'

const WorkSpace = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(todos => {
      return [...todos, todo];
    })
  }

  return (
    <div className="container">
      <InputTodo addTodo={addTodo} />
      <div className="todosSpace">
        <Todos todos={todos} />
      </div>
    </div>
  )
}

export default WorkSpace