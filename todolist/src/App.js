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
    console.log(todos);
  }

  function deleteToDo(index) {
    const removeItem = todos.filter((toDo, i) => {
     return i !== index;
    });
    setTodos(removeItem);
    console.log(removeItem);
  }

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <h3>Add ToDo</h3>
      <form>
        <label>Description: </label>
          <input type="text" name="desc" value={toDo.desc} onChange={inputChanged}/>
        <label>Date: </label>
          <input type="text" name="date" value={toDo.date} onChange={inputChanged}/>
        <button onClick={addTodo}>Add</button>
      </form>
      <table className="center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((toDo, index) =>
              <tr key={index}>
                <td>{toDo.date}</td>
                <td>{toDo.desc}</td>
                <td><button onClick={() => deleteToDo(index)}>Delete</button></td>
              </tr>
            )
          }  
        </tbody>
      </table>
    </div>
  );
}

export default App;
