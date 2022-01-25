import React from "react";

export const TodoList = ({ todoList, setTodoList }) => {
  const handleDelete = (key) => {
    let newTodos = todoList.map((todo) => {
      if (todo.key === key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodoList(newTodos);
  };
  const handleRemove = (key) => {
    let newTodos = todoList.map((todo) => {
      if (todo.key === key) {
        todo.removed = !todo.removed;
      }
      return todo;
    });
    setTodoList(newTodos);
  };
  const ActiveList = todoList.filter((todo) => {
    return !todo.removed;
  });
  return (
    <div>
      <ul>
        {ActiveList.map((todo) => {
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
                  onClick={() => handleDelete(todo.key)}
                >
                  {todo.done ? "戻す" : "完了"}
                </button>
                <button
                  className="text-l font-medium text-red-500"
                  onClick={() => handleRemove(todo.key)}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
