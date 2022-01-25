import React from "react";
import { InputForm } from "./InputForm";
import { RemovedList } from "./RemovedList";
import { TodoList } from "./TodoList";

export const MainTab = ({ abledTab, todoList, setTodoList }) => {
  if (abledTab === "all") {
    return (
      <div className="Main">
        <InputForm todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    );
  } else if (abledTab === "removed") {
    return (
      <div className="Main">
        <RemovedList todoList={todoList} setTodoList={setTodoList} />
      </div>
    );
  }
  return <div></div>;
};
