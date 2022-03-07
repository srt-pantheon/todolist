import { useEffect, useState } from "react";
import { Row, Col, Button, Input } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";

function TodoList(props) {
  const [inputTest, changeInputTest] = useState("");
  console.log("props.todos = ", props.todos);
  console.log("TODOLIST RERENDERED!");

  function generateList(arr) {
    let list = arr.map((item) => {
      let x = todoListItem(item);
      return x;
    });
    return list;
  }

  function removeHandler(event) {
    let taskId = event.target.parentElement.id;
    props.removeFunc(taskId);
  }

  function toggleInput(event, taskId) {
    let x = document.getElementById("input_" + taskId);
    x.hasAttribute("disabled")
      ? x.removeAttribute("disabled")
      : x.setAttribute("disabled", "true");
  }

  function changeHandler(event, taskId) {
    event.preventDefault();
    let x = document.getElementById("input_" + taskId); 
    props.updateFunc(taskId, event.target.value); // есть ли другой вариант реализации обработки импута, или нужно постоянно ререндерить
  }

  // Стоит ли вынести todoListItem в отдельную компоненту 
  function todoListItem(task) {
    return (
      <div key={task.id} style={{ margin: "10px auto" }}>
        <Row justify="center" style={{ alignItems: "center" }}>
          <Col span={5}>
            <input
              disabled="disabled"
              type="text"
              value={task.task}
              id={"input_" + task.id}
              onChange={(e) => changeHandler(e, task.id)}
            />
          </Col>
          <Col
            span={1}
            style={{ textAlignVertical: "center", textAlign: "center" }}
          >
            <a>
              <CloseCircleOutlined
                id={task.id}
                onClick={(e) => removeHandler(e)}
              />
            </a>
          </Col>
          <Col
            span={1}
            style={{ textAlignVertical: "center", textAlign: "center" }}
          >
            <a>
              <EditOutlined onClick={(e) => toggleInput(e, task.id)} />
            </a>
          </Col>
        </Row>
      </div>
    );
  }

  // нормально ли делать такой return?
  return generateList(props.todos);
}

export default TodoList;
