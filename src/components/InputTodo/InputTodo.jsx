import React, { useState } from "react";

import "./inputTodo.scss";
import { useSnackbar } from 'notistack';

import Button from "@mui/material/Button";

const InputTodo = ({addTodo}) => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    id: `${Date.now()}-idTodo`,
    title: "",
    note: "",
    date: new Date().toLocaleDateString(),
    checked: false
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
    
    if (!formData.title) {
      enqueueSnackbar("Title is empty", { variant: "error" });
      return;
    }

    if (!formData.note) {
      enqueueSnackbar("Note is empty", { variant: "error" });
      return;
    }

    if(formData.title && formData.note) {
      addTodo(formData);
      
      enqueueSnackbar("Todo has been added", { variant: "success" });

      setFormData({
        id: `${Date.now()}-idTodo`,
        title: "",
        note: "",
        date: new Date().toLocaleDateString(),
        checked: false
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
