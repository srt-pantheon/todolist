import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [uniqueId, setUniqueId] = useState(1);

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
        return { id: id, task: newValue, status: item.status };
      }
      return item;
    });
    setTodos(arr);
  }

  function changeStatus(id) {
    let arr = todos.map((item) => {
      if (item.id == id) {
        return {
          id: id,
          task: item.task,
          status: item.status == "disabled" ? "enabled" : "disabled",
        };
      }
      return item;
    });
    setTodos(arr);
  }

  return (
    <div className="Todo">
      <TodoAdd onClick={addTodo} uniqueId={uniqueId} />
      <TodoList
        todos={todos}
        removeFunc={removeTodo}
        updateFunc={updateTodo}
        statusFunc={changeStatus}
      />
    </div>
  );
}

export default Todo;
