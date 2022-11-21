import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo, toggleTodo, changeEditStatus, setUpdate } = props;
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            changeEditStatus={changeEditStatus}
            setUpdate={setUpdate}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
