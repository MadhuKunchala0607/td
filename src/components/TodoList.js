import React from 'react';

function TodoList({ todolist, handleDelete }) {
  return (
    <ul>
      {todolist.map((todo, index) => (
        <li key={index}>
          {index + 1}. {todo}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
