import React, { useState } from "react";

export const InputForm = ({ todoList, setTodoList }) => {
  const getKey = () => Math.random().toString(32).substring(2);
  const [inputText, setInputText] = useState("");
  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTodoList([{ key: getKey(), text: inputText, done: false, removed: false}, ...todoList]);
    setInputText("");
  };

  return (
    <div>
      <form className="" onSubmit={handleOnSubmit}>
        <div className="flex justify-between items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-lg text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Future todos"
            value={inputText}
            onChange={handleOnChange}
          />
          <input
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            value="追加"
          />
        </div>
      </form>
    </div>
  );
};
