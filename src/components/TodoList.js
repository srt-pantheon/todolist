import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

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
          className="todo-input"
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
      <div
        // className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        className={"todo-row"}
        key={task.id}
      >
        <div key={task.id}>
          {returnElement(task.status, task.task, task.id)}
        </div>

        <div className="icons">
          <RiCloseCircleLine
            onClick={(e) => removeHandler(e, task.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={(e) => toggleInput(e, task.id)}
            className="edit-icon"
          />
        </div>
      </div>
    );
  }

  return generateList(props.todos);
}

export default TodoList;
