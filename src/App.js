import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // Estado para el filtro

  const addTask = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    localStorage.setItem('filter', newFilter);  // Guardar el filtro en LocalStorage
  };

  // Filtrar las tareas según el estado del filtro
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    }
    return true; // "all" muestra todas las tareas
  });

  

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoForm addTask={addTask} />
      
      {/* Añadir botones para filtrar */}
      <div>
        <button onClick={() => handleFilterChange("all")} 
          style={{ fontWeight: filter === "all" ? 'bold' : 'normal' }}
        >All</button>
        <button 
          onClick={() => handleFilterChange("completed")} 
          style={{ fontWeight: filter === "completed" ? 'bold' : 'normal' }}
        >Completed</button>
        <button 
          onClick={() => handleFilterChange("incomplete")} 
          style={{ fontWeight: filter === "incomplete" ? 'bold' : 'normal' }}
        >Incomplete</button>
      </div>

      {/* Pasar la lista filtrada a TodoList */}
      <TodoList todos={filteredTodos} completeTask={completeTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
