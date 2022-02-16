import { Row, Col, Button, Input } from "antd";
import { useState } from "react";
import TodoList from "./TodoList";

function TodoAdd() {
  const [inputValue, setInputValue] = useState();
  const [myArray, updateMyArray] = useState([]);

  function addTodoHandler() {
    // TODO - как красиво и правильно использовать массив с useState
    // updateMyArray((existingItems) => {
    // return [...existingItems, inputValue]
    // });
    updateMyArray((arr) => {
      arr.push(inputValue);
      return arr;
    });
    setInputValue();
  }

  return (
    <div style={{ margin: "10px auto" }}>
      <Row justify="center">
        <Col span={4}>
          <Input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            placeholder="Add a todo"
          />
        </Col>
        <Col span={3}>
          <Button onClick={addTodoHandler} type="primary" block>
            Add Todo
          </Button>
        </Col>
      </Row>
      <TodoList arrayList={myArray} />
    </div>
  );
}

export default TodoAdd;
