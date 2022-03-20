import { useState } from "react";

function TodoAdd(props) {
  const [inputValue, setInputValue] = useState("");

  function addTodoHandler(event) {
    event.preventDefault();
    let obj = { id: props.uniqueId, task: inputValue, status: "disabled" };
    props.onClick(obj);
    setInputValue("");
  }

  return (
    <form className="todo-form">
      <input
        placeholder="Add a todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="todo-input"
      />
      <button onClick={(e) => addTodoHandler(e)} className="todo-button">
        Add todo
      </button>
    </form>
  );
}

export default TodoAdd;
