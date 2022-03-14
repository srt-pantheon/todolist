import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [uniqueId, setUniqueId] = useState(1);
  const [status, setStatus] = useState("disabled");
  console.log("todos = ", todos);

  function addTodo(task) {
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setUniqueId((id) => id + 1);
  }

  function removeTodo(id) {
    let arr = todos.filter((item) => {
      if (item.id == id) {
        return false;
      }
      return true;
    });
    setTodos(arr);
  }

  function updateTodo(id, newValue) {
    let arr = todos.map((item) => {
      if (item.id == id) {
        return { id: id, task: newValue };
      }
      return item;
    });
    setTodos(arr);
  }

  return (
    <div className="Todo">
      <TodoAdd onClick={addTodo} uniqueId={uniqueId} status={status} />
      <TodoList todos={todos} removeFunc={removeTodo} updateFunc={updateTodo} />
    </div>
  );
}

export default Todo;
