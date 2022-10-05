import './App.css';
import React, { useState } from 'react';
import ToDoTable from './components/ToDoTable'
import ToDoForm from './components/ToDoList'

function App() {
  const [toDo, setToDo] = useState({date:'', desc:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, toDo]);
    //console.log(todos);
    //lomakekentän tyhjennys
    setToDo({date:'', desc:''});
  }

  function deleteToDo(index) {
    const removeItem = todos.filter((toDo, i) => {
     return i !== index;
    });
    setTodos(removeItem);
    console.log(index);
  }

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <ToDoForm toDo={toDo} inputChanged={inputChanged} addTodo={addTodo} />
      <ToDoTable todos={todos} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;

