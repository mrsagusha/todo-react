import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo(props) {
  const { todo, deleteTodo, toggleTodo, changeEditStatus, setUpdate } = props;

  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div
        className={`${styles.todoText} ${
          todo.isCompleted ? styles.completedTodo : ''
        }`}
      >
        {todo.text}
      </div>
      <MdModeEdit
        className={styles.editIcon}
        title="Edit"
        onClick={() => {
          setUpdate(todo.id);
          changeEditStatus(todo.id);
        }}
      />
      <RiDeleteBin2Line
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteIcon}
        title="Delete"
      />
      <FaCheck
        onClick={() => toggleTodo(todo.id)}
        className={styles.checkIcon}
        title="Complete"
      />
    </div>
  );
}

export default Todo;
