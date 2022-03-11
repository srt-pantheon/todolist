import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

// Решил релизовать через функции колбэки получается. Какой вариант предпочтительнее так, или как делал в первый раз где
// в каждую компопненту передавались пропсы и функции внутри этих компонент обрабатывали локальные данные???

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
        return { id: id, task: newValue };
      }
      return item;
    });
    setTodos(arr);
  }

  return (
    <div className="Todo">
      <TodoAdd onClick={addTodo} uniqueId={uniqueId} />
      <TodoList todos={todos} removeFunc={removeTodo} updateFunc={updateTodo} />
    </div>
  );
}

export default Todo;
