import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(task){
    // let arr = [todos, ...task];
    let arr = todos;
    console.log('task = ', task);
    console.log('arr = ', arr);
    console.log('arr after push = ', arr);
    // let arr = [task];
    // console.log('arr before setTodos = ', arr);
    setTodos(arr.push(task));
    console.log('todos = ', todos);
  }

  function removeTodo(id){
    let arr = todos.splice(id,1);
    setTodos(arr);
  }

  function updateTodo(id, newValue){
    let arr = todos;
    arr[id] = newValue;
    setTodos(arr);
  }

  return (
    <div className="Todo">
      <TodoAdd onClick={addTodo}/>
      {/* <TodoList todos={todos} /> */}
    </div>
  );
}

export default Todo;
