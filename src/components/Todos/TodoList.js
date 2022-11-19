import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo } = props;
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((el, index) => (
          <Todo todo={el} key={index} index={index} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
