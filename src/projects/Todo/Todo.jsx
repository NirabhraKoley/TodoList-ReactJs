import React, { useState } from "react";
import "../Todo/Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((preTask) => [...preTask, { id, content, checked }]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curElem) => curElem.content !== value);
    setTask(updatedTask);
  };

  const handleClearAllButton = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  const handleDeleteButton = () => {
    const updatedTask = task.filter((curElem) => curElem.checked !== true);
    setTask(updatedTask);
  };

  const handleEditButton = (value) => {
    const newValue = prompt(`Enter the data: `);
    if (!newValue) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === newValue
    );
    if (ifTodoContentMatched) {
      alert("Value already entered");
    } else {
      const newEditItem = task.map((curTask) =>
        curTask.content === value
          ? { ...curTask, content: newValue, id: newValue }
          : curTask
      );
      setTask(newEditItem);
    }
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section>
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                  onHandleEditButon={handleEditButton}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleDeleteButton}>
            Delete
          </button>
          <button className="clear-btn" onClick={handleClearAllButton}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};
