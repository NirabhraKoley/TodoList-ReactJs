const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawTodo = localStorage.getItem(todoKey);
  if (!rawTodo) return [];
  return JSON.parse(rawTodo);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
