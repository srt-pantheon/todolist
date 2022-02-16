import TodoListItem from "./TodoListItem";

function TodoList(props) {
  if (props.arrayList.length == 0) {
    return <div></div>;
  } else {
    return (
      <div>
        {props.arrayList.map((item, index) => (
          <TodoListItem key={index} task={item} index={index}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
