import React from "react";
import { CiBookmark } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  onHandleEditButon,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button
        className={checked ? "unchecked-btn" : "check-btn"}
        onClick={() => onHandleCheckedTodo(data)}
      >
        <CiBookmark />
      </button>
      <button className="edit-btn" onClick={() => onHandleEditButon(data)}>
        <FaPencilAlt />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDelete />
      </button>
    </li>
  );
};
