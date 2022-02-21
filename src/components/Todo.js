import "antd/dist/antd.css";
import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
  const [arr, udateArr] = useState([]);
  function changeArray() {
    udateArr(["s", "r", "t"]);
  }
  return (
    <div className="App">
      <button onClick={changeArray} type="submit">Change ARRAY</button>
      <TodoAdd />
      <TodoList arrayList={arr} />
    </div>
  );
}

export default Todo;
