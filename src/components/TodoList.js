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

  function removeHandler(event) {
    let taskId = event.target.parentElement.id;
    props.removeFunc(taskId);
  }

  function toggleInput(event, taskId) {
    event.preventDefault();
    props.statusFunc(taskId);
    //переделать с колбэком по аналогии changeHanler - чтобы функция меняла status в todos и происходил ререндер, при котором менялось p или input
  }

  function changeHandler(event, taskId) {
    event.preventDefault();
    props.updateFunc(taskId, event.target.value);
  }

  function todoListItem(task) {
    return (
      <div key={task.id} style={{ margin: "10px auto" }}>
        <Row justify="center" style={{ alignItems: "center" }}>
          <Col span={5}>
            <input
              // написать условие чтобы превращалось в инпут, а если не редактировать то текст P - вынести уловие сюда
              disabled={task.status == "enabled" ? false : true}
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
