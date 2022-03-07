import { useEffect, useState } from "react";
import { Row, Col, Button, Input } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";

function TodoList(props) {
 const [listArr, changeListArr] = useState();
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
    let x = document.getElementsByName(taskId)[0];
    x.hasAttribute("disabled")
      ? x.removeAttribute("disabled")
      : x.setAttribute("disabled", "true");
  }

  // function toggleInput(event) {
  //   let x = document.getElementById("inputid_" + props.index);
  //   x.hasAttribute("disabled")
  //     ? x.removeAttribute("disabled")
  //     : x.setAttribute("disabled", "true");
  // }

  function changeHandler(event, taskId) {
    event.preventDefault();
    let x = document.getElementsByName(taskId)[0];
    console.log(x);
    x.setAttribute("value", "SRT");
    console.log(x);
  }

  function todoListItem(task) {
    return (
      <div key={task.id} style={{ margin: "10px auto" }}>
        <Row justify="center" style={{ alignItems: "center" }}>
          <Col span={5}>
            {/* <input
              disabled="disabled"
              type="text"
              value={inputValue}
              onChange={(e) => changeHandler(e)}
            /> */}
            <input
              disabled="disabled"
              type="text"
              value={task.task}
              name={task.id}
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
              {/* <EditOutlined /> */}
            </a>
          </Col>
        </Row>
      </div>
    );
  }

  return generateList(props.todos);

  // if (props.todos.length == 0) {
  //   return <div></div>;
  // } else {
  //   return (
  //     <div>
  //       {props.todos.map((item, index) => (
  //         <TodoListItem key={index} task={item} index={index}/>
  //       ))}
  //     </div>
  //   );
  // }
}

export default TodoList;
