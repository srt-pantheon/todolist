import TodoListItem from "./TodoListItem";

function TodoList(props) {
  console.log('props.todos = ', props.todos);

  if (props.todos.length == 0) {
    return <div></div>;
  } else {
    return (
      <div>
        {props.todos.map((item, index) => (
          <TodoListItem key={index} task={item} index={index}/>
        ))}
      </div>
    );
  }
}

export default TodoList;
