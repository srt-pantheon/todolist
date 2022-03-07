import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

// Решил релизовать через функции колбэки получается. Какой вариант предпочтительнее так, или как делал в первый раз где
// в каждую компопненту передавались пропсы и функции внутри этих компонент обрабатывали локальные данные??? 

function Todo() {
  console.log("TODO RERENDERED!");
  const [todos, setTodos] = useState([]);
  const [uniqueId, setUniqueId] = useState(1);

  function addTodo(task) {
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setUniqueId((id) => id + 1);
  }

  function removeTodo(id) {
    let idToRemove;
    let arr = [...todos];
    todos.forEach((item, index) => {
      if (item.id == id) {
        idToRemove = index;
      }
    });
    arr.splice(idToRemove, 1);
    setTodos(arr);
  }

  function updateTodo(id, newValue) {
    let idToUpdate;
    let arr = [...todos];
    todos.forEach((item, index) => {
      if (item.id == id) {
        idToUpdate = index;
        arr[index] = { id: id, task: newValue }; // почему работает без ковычек "id": id ???? 
      }
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
