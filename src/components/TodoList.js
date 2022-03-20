import { useState } from "react";
import { Row, Col } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";

function TodoList(props) {
  const [inputTest, changeInputTest] = useState("");

  function generateList(arr) {
    let list = arr.map((item) => {
      let x = todoListItem(item);
      return x;
    });
    return list;
  }

  function removeHandler(event, taskId) {
    props.removeFunc(taskId);
  }

  function toggleInput(event, taskId) {
    event.preventDefault();
    props.statusFunc(taskId);
  }

  function changeHandler(event, taskId) {
    event.preventDefault();
    props.updateFunc(taskId, event.target.value);
  }

  function returnElement(taskStatus, taskTask, taskID) {
    if (taskStatus == "enabled") {
      return (
        <input
          type="text"
          className='todo-input'
          value={taskTask}
          id={"input_" + taskID}
          onChange={(e) => changeHandler(e, taskID)}
        />
      );
    } else {
      return <p id={"input_" + taskID}>{taskTask}</p>;
    }
  }

  function todoListItem(task) {
    return (
      <div key={task.id} style={{ margin: "10px auto" }} >
        <Row justify="center" style={{ alignItems: "center" }} className={'todo-row'}>
          <Col span={5}>{returnElement(task.status, task.task, task.id)}</Col>
          <Col
            span={1}
            style={{ textAlignVertical: "center", textAlign: "center" }}
          >
            <a>
              <CloseCircleOutlined onClick={(e) => removeHandler(e, task.id)} />
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

  return generateList(props.todos);
}

export default TodoList;
