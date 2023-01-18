import React, { useState } from "react";

import "./inputTodo.scss";

import Button from "@mui/material/Button";

const InputTodo = () => {
  const [formData, setFormData] = useState({
    title: "",
    note: "",
  });

  console.log("formData: ", formData);

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
    console.log(formData);
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
