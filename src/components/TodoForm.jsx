import { useState } from "react";

export function TodoForm(props) {
  let { darkTheme, todoList, setTodoList } = props;
  let [title, setTitle] = useState("");
    function saveTodo() {
        setTodoList(
          todoList.concat({
            id: Math.floor(Math.random() * 100 + 1),
            title: title,
            status:false
          })
        );
        setTitle("")
        console.log(todoList);
        
    }
  return (
    <div className=" py-4 px-15 space-x-4 text-center">
      <input
        type="text"
        className={`border-3 rounded-md w-90 h-10 p-2 text-lg ${
          darkTheme
            ? "border-amber-50 text-amber-50"
            : "border-amber-900 text-amber-900"
        }`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className={`py-2 px-3 rounded-lg text-lg font-semibold cursor-pointer  ${
          darkTheme
            ? "bg-amber-50 text-amber-900 disabled:bg-gray-200 disabled:opacity-55"
            : "bg-amber-900 text-amber-50 disabled:bg-gray-600 disabled:opacity-55"
        }`}
        onClick={saveTodo}
        disabled={title === ""}
      >
        CREATE
      </button>
    </div>
  );
}
