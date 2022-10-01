import './App.css';
import React, { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState({date:'', desc:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, toDo]);
  }

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <table>
        <thead>
          <tr>
            <th>
              Description: <input type="text" name="desc" value={toDo.desc} onChange={inputChanged}/>
            </th>
            <th>
              Date: <input type="text" name="date" value={toDo.date} onChange={inputChanged}/>
              <button onClick={addTodo}>Add</button>
            </th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
              </tr>
            )
          }  
        </tbody>
      </table>
    </div>
  );
}

export default App;
