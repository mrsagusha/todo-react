import { useState } from 'react';
import { IoIosCheckmark, IoIosClose } from 'react-icons/io';
import styles from './TodoForm.module.css';

function TodoForm(props) {
  const {
    addTodo,
    todos,
    updateData,
    changeUpdate,
    cancelUpdate,
    approveUpdate,
  } = props;
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      {todos.some((todo) => todo.editStatus === true) ? (
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              value={updateData && updateData.text}
              onChange={(e) => changeUpdate(e)}
              placeholder="Enter new todo"
            />
            <IoIosCheckmark
              className={styles.todoFormAcceptButton}
              title="Update"
              onClick={() => {
                approveUpdate(
                  todos.find((todo) => todo.editStatus === true).id
                );
                console.log(todos.find((todo) => todo.editStatus === true).id);
                console.log(updateData);
              }}
            />
            <IoIosClose
              className={styles.todoFormCancelButton}
              title="Cancel"
              onClick={() => cancelUpdate()}
            />
          </form>
        </>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new todo"
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default TodoForm;
