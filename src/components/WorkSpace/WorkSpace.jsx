import React, {useState} from 'react'
import './workSpace.scss'

import InputTodo from '../InputTodo/InputTodo'
import Todos from '../Todos/Todos'

const WorkSpace = () => {
  const localData = JSON.parse(localStorage.getItem("Todos") || "[]");
  const [todos, setTodos] = useState(localData);

  const addTodo = (todo) => {
    setTodos(todos => {
      localStorage.setItem("Todos", JSON.stringify([...todos, todo]));
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