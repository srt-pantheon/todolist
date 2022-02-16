import { useState } from "react";
import { Row, Col, Button, Input } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";

function TodoListItem(props) {
  const [inputValue, changeInputValue] = useState(props.task);

  function removeHandler(event) {
    let x = document.getElementById("task_" + props.index);
    x.style.display = "none";
  }

  function toggleInput(event) {
    let x = document.getElementById("inputid_" + props.index);
    x.hasAttribute("disabled")
      ? x.removeAttribute("disabled")
      : x.setAttribute("disabled", "true");
  }

  function changeHandler(event) {
    changeInputValue(event.target.value);
  }

  return (
    <div
      key={props.index}
      id={"task_" + props.index}
      style={{ margin: "10px auto" }}
    >
      <Row justify="center" style={{ alignItems: "center" }}>
        <Col span={5}>
          <input
            disabled="disabled"
            type="text"
            id={"inputid_" + props.index}
            value={inputValue}
            onChange={(e) => changeHandler(e)}
          />
        </Col>
        <Col
          span={1}
          style={{ textAlignVertical: "center", textAlign: "center" }}
        >
          <a>
            <CloseCircleOutlined onClick={(e) => removeHandler(e)} />
          </a>
        </Col>
        <Col
          span={1}
          style={{ textAlignVertical: "center", textAlign: "center" }}
        >
          <a>
            <EditOutlined onClick={(e) => toggleInput(e)} />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default TodoListItem;
