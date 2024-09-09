import React from 'react';

function TodoList({ todos, completeTask, removeTask }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.task}
          <button onClick={() => completeTask(index)}>Complete</button>
          <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
