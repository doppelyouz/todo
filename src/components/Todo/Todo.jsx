import React, { useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./todo.scss";

const Todo = ({
  title,
  note,
  date,
  checkTodo,
  deleteTodo,
  editTodo,
  id,
  checked,
}) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editNote, setEditNote] = useState(note);

  const handleSetEditTitle = (event) => {
    setEditTitle(event.target.value);
  };
  const handleSetEditNote = (event) => {
    setEditNote(event.target.value);
  };

  let todoStyles = `todo`;
  if (checked) {
    todoStyles += " checked";
  }

  return (
    <div className={todoStyles}>
      {editing ? (
        <>
          <div className="title">
            <label>
              <input
                value={editTitle}
                className="edit_todo"
                onChange={handleSetEditTitle}
              />
            </label>
          </div>
          <div className="note">
            <label>
              <input
                value={editNote}
                className="edit_todo"
                onChange={handleSetEditNote}
              />
            </label>
          </div>
          <button onClick={() => {
            editTodo(id, editTitle, editNote);
            setEditing(editing => !editing);
          }}>
            Cохранить
          </button>
        </>
      ) : (
        <>
          <div className="title">{title}</div>
          <div className="note">{note}</div>
          <div className="controlPanel">
            <button onClick={() => {
                editTodo(id);
                setEditing(editing => !editing)
              }}>
              <EditIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <button onClick={() => deleteTodo(id)}>
              <DeleteIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <button onClick={() => checkTodo(id)}>
              <CheckIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <div className="date">{date}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
