import Todo from './Todo';

function TodoList(props) {
  const { todos } = props;
  return todos.map((el, index) => <Todo todo={el} key={index} />);
}

export default TodoList;
