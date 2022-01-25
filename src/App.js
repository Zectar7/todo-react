import { useState } from "react";
import "./App.css";
import { MainTab } from "./components/MainTab";
import { Tab } from "./components/Tab";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [abledTab, setAbledTab] = useState("all");

  return (
    <div className="w-300">
      <nav className="text-3xl font-bold text-teal-500 drop-shadow-md my-2">Todo App</nav>
      <Tab abledTab={abledTab} setAbledTab={setAbledTab} />
      <MainTab
        todoList={todoList}
        setTodoList={setTodoList}
        abledTab={abledTab}
      />
    </div>
  );
}

export default App;
