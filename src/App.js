import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // Run Once during app start
  useEffect(() => {
    getLocalTodos();
  }, [])

  // Use Effect
  useEffect(() => {
    saveTodosLocal();
  }, [todos]);

  // Save to Local storage
  const saveTodosLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  // Get Todos from local storage
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }

  return (
    <div className="App">
        <header className="app-title">
          <h1>React Todo App </h1>
        </header>

        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
        />

        <TodoList 
          setTodos={setTodos} 
          todos={todos} 
        />
    </div>
  );
}

export default App;
