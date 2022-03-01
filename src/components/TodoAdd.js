import { Row, Col, Button, Input } from "antd";
import { useState } from "react";

function TodoAdd(props) {
  const [inputValue, setInputValue] = useState("");

  function addTodoHandler() {
    props.onClick(inputValue);
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
    </div>
  );
}

export default TodoAdd;
