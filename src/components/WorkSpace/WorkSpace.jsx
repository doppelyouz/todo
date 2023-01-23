import React, {useState} from 'react'
import './workSpace.scss'

import InputTodo from '../InputTodo/InputTodo'
import Todos from '../Todos/Todos'

import { useSnackbar } from 'notistack';

const WorkSpace = () => {
  const { enqueueSnackbar } = useSnackbar();

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
    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(t => {
        if(t.id !== id) {
          return t;
        }
    })
    enqueueSnackbar("Todo has been removed", { variant: "info" });
    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  }

  const editTodo = (id, title, note) => {
    const newTodos = todos.map(t => {
      if(t.id === id) {
        if(title || note) {
          enqueueSnackbar("Todo has been changed", { variant: "info" });
        }
        return {
          ...t,
          title,
          note
        }
      }
      return t;
    })
    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  }

  return (
    <div className="container">
      <InputTodo addTodo={addTodo} />
      <div className="todosSpace">
        <Todos todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    </div>
  )
}

export default WorkSpace