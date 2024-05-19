import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './Style.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a task.");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className='card'>
        <div className='card-body'>
          <div className='card-title'>
            <h1>Todo List</h1>
            <form onSubmit={submitHandler}>
              <input type='text' name='task' value={task} onChange={changeHandler} />
              <input type='submit' value='Add' disabled={!task.trim()} />
              {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
            <TodoList todolist={todos} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
