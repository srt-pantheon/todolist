import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(task) {
    const newTodos = [...todos, task];
    setTodos(newTodos);
  }

  function removeTodo(id) {
    let arr = todos.splice(id, 1);
    setTodos(arr);
  }

  function updateTodo(id, newValue) {
    let arr = todos;
    arr[id] = newValue;
    setTodos(arr);
  }

  console.log("todos = ", todos);
  return (
    <div className="Todo">
      <TodoAdd onClick={addTodo} />
      {/* <TodoList todos={todos} /> */}
    </div>
  );
}

export default Todo;
