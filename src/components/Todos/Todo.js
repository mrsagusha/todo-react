import styles from './Todo.module.css';

function Todo(props) {
  const { todo, index, deleteTodo } = props;
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
