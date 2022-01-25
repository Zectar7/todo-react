import React from "react";

export const RemovedList = ({ todoList, setTodoList }) => {
  const handleUndo = (key) => {
    let newTodos = todoList.map((todo) => {
      if (todo.key === key) {
        todo.removed = !todo.removed;
      }
      return todo;
    });
    setTodoList(newTodos);
  };
  const handleDelete = (key) => {
    let newTodos = todoList.filter((todo) => {
      return todo.key !== key;
    });
    setTodoList(newTodos);
  };
  const removedList = todoList.filter((todo) => {
    return todo.removed;
  });
  return (
    <div>
      <ul>
        {removedList.map((todo) => {
          return (
            <li
              className={
                "max-w-md py-4 px-8 shadow-lg rounded-lg my-5 " +
                (todo.done ? "bg-gray-400" : "bg-white")
              }
              key={todo.key}
            >
              <div className="text-xl">{todo.text}</div>
              <div className="flex justify-end">
                <button
                  className="text-l font-medium text-indigo-500 mr-2"
                  onClick={() => handleUndo(todo.key)}
                >
                  元に戻す
                </button>
                <button
                  className="text-l font-medium text-red-500"
                  onClick={() => handleDelete(todo.key)}
                >
                  完全に削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
