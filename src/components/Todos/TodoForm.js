import { useState } from 'react';

function TodoForm(props) {
  const { addTodo } = props;
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
