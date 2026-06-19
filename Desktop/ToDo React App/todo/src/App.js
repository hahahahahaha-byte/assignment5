import React, { useState } from 'react';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import FilterBar from './components/FilterBar/FilterBar';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React components', completed: true },
    { id: 2, text: 'Build a TODO app', completed: false },
    { id: 3, text: 'Master props and state', completed: false },
  ]);
  const [filter, setFilter] = useState('all');
  const [nextId, setNextId] = useState(4);

  const addTodo = (text) => {
    const newTodo = { id: nextId, text, completed: false };
    setTodos([newTodo, ...todos]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="app-container">
      <Header total={todos.length} completed={completedCount} />
      <AddTodo onAdd={addTodo} />
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
      {completedCount > 0 && (
        <div className="clear-section">
          <button className="btn-clear" onClick={clearCompleted}>
            🧹 Clear Completed ({completedCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default App;