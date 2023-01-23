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

  const checkTodo = (id) => {
    const newTodos = todos.map(t => {
      if(t.id === id) {
        return {
          ...t,
          checked: !t.checked
        }
      }
      return t;
    })
    console.log(newTodos);
    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  }

  return (
    <div className="container">
      <InputTodo addTodo={addTodo} />
      <div className="todosSpace">
        <Todos todos={todos} checkTodo={checkTodo} />
      </div>
    </div>
  )
}

export default WorkSpace