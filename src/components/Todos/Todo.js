import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo(props) {
  const { todo, deleteTodo } = props;
  return (
    <div onDoubleClick={() => deleteTodo(todo.id)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.checkIcon} />
      <FaCheck className={styles.deleteIcon} />
    </div>
  );
}

export default Todo;
