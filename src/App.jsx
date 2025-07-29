import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { List } from "./components/List";


function App() {
  let [darkTheme, setDarkTheme] = useState(false);
  let [todoList,setTodoList] = useState([])

  return (
    <div
      className={`pt-12 min-h-screen max-h-full flex flex-col items-center ${
        darkTheme ? "bg-amber-900" : "bg-amber-50"
      }`}
    >
      <div
        className={`w-150 border-3 rounded-lg ${
          darkTheme ? "border-amber-50" : " border-amber-900"
        }`}
      >
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Header>
        <TodoForm
          darkTheme={darkTheme}
          todoList={todoList}
          setTodoList={setTodoList}
        ></TodoForm>
        <List
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          todoList={todoList}
          setTodoList={setTodoList}
        ></List>
      </div>
    </div>
  );
}

export default App;
