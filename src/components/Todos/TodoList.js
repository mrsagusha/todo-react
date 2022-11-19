import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos } = props;
  return (
    <div className="styles.todoListContainer">
      {todos.map((el, index) => (
        <Todo todo={el} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
