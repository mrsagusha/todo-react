import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);
  const [updateData, setUpdateData] = useState('');

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      editStatus: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const changeEditStatusHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id && todo.editStatus === true) {
          todo.editStatus = false;
        }
        return todo.id === id
          ? { ...todo, editStatus: !todo.editStatus }
          : { ...todo };
      })
    );
  };

  const cancelUpdateHandler = () => {
    setUpdateData('');
    changeEditStatusHandler(todos.find((todo) => todo.editStatus === true).id);
  };

  const setUpdateHandler = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    setUpdateData({
      text: todo.text,
      isCompleted: todo.isCompleted,
      editStatus: todo.editStatus,
      id: todo.id,
    });
  };

  const changeUpdateHandler = (e) => {
    const newTodo = {
      text: e.target.value,
      isCompleted: updateData.isCompleted,
      editStatus: updateData.editStatus,
      id: updateData.id,
    };
    setUpdateData(newTodo);
  };

  const approveUpdateHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              text: updateData.text,
              isCompleted: todo.isCompleted,
              editStatus: !todo.editStatus,
              id: todo.id,
            }
          : { ...todo };
      })
    );
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodoHandler}
        todos={todos}
        updateData={updateData}
        changeUpdate={changeUpdateHandler}
        cancelUpdate={cancelUpdateHandler}
        approveUpdate={approveUpdateHandler}
      />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        changeEditStatus={changeEditStatusHandler}
        setUpdate={setUpdateHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
