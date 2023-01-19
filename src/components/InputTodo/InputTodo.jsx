import React, { useState } from "react";

import "./inputTodo.scss";

import Button from "@mui/material/Button";

const InputTodo = ({addTodo}) => {
  const [formData, setFormData] = useState({
    title: "",
    note: "",
    date: new Date().toLocaleDateString()
  });

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;

    setFormData((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  };
  
  const sumbitTodo = (event) => {
    event.preventDefault();
    if(formData.title && formData.note) {
      addTodo(formData);
      setFormData({
        title: "",
        note: "",
        date: new Date().toLocaleDateString()
      });
    }
  }

  return (
    <div className="input_todo_block">
      <form>
        <label>
          <input
            type="text"
            name="title"
            className="input_todo"
            placeholder="Заголовок"
            value={formData.title}
            onChange={inputChangeHandler}
          />
        </label>
        <label>
          <textarea
            name="note"
            className="textarea_todo"
            placeholder="Ваша заметка"
            value={formData.note}
            onChange={inputChangeHandler}
          />
        </label>
        <div className="save">
          <Button variant="contained" type="sumbit" onClick={sumbitTodo}>
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
