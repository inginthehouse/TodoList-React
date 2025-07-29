export function List(props) {
  let { darkTheme, setDarkTheme, todoList, setTodoList } = props;

  function deleteTodo(id) {
    setTodoList(todoList.filter((t) => t.id !== id));
  }
  function setDone(id) {
    setTodoList(
      todoList.map((t) => (t.id === id ? { ...t, status: !t.status } : t))
    );
  }
  return (
    <div className=" py-4 px-15 space-x-4">
      {todoList.length <= 0 && (
        <p
          className={`text-center font-semibold text-xl  ${
            darkTheme ? "text-amber-50 opacity-75" : "text-amber-800 opacity-55"
          }`}
        >
          Add your List
        </p>
      )}

      <ul className="space-y-3">
        {todoList.map((t, index) => (
          <li
            className={`text-lg font-semibold flex  justify-between items-center ${
              darkTheme ? "text-amber-50" : "text-amber-900"
            }`}
            key={index}
          >
            <div className="space-x-3">
              <input
                type="checkbox"
                id={`list-${index}`}
                onClick={() => setDone(t.id)}
                className={`checkbox border-3 ${
                  darkTheme
                    ? "border-amber-50 checked:bg-amber-50 checked:text-amber-900"
                    : "border-amber-900 checked:bg-amber-900 checked:text-amber-50"
                }`}
              />
              <label
                htmlFor={`list-${index}`}
                className={`${t.status ? "line-through" : "no-underline"}`}
              >
                {t.title}
              </label>
            </div>
            <div>
              <button
                className={`py-1 px-3 rounded-lg text-[15px] cursor-pointer  ${
                  darkTheme
                    ? "bg-amber-100 text-amber-700"
                    : "bg-amber-700 text-amber-100"
                }`}
                onClick={() => deleteTodo(t.id)}
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
