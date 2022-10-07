import './App.css';
import React, { useState, useRef } from 'react';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS

function App() {
  const [toDo, setToDo] = useState({date:'', desc:'', priority:''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: 'agTextColumnFilter'},
    {headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: 'agTextColumnFilter'},
    {headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: 'agTextColumnFilter',
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
  ]

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, toDo]);
    //lomakekentän tyhjennys
    //setToDo({date:'', desc:'', priority:''});
  }

  //poistaa kaikki listalta
  const deleteToDo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((toDo, index) => //virhe
        index !== gridRef.current.getSelectedNodes()[0].childIndex))
    } else {
      alert('Select row first');
    }
  }

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <h4>Add ToDo:</h4>
      <form>
        <label>Description: </label>
          <input type="text" name="desc" value={toDo.desc} onChange={inputChanged}/>
        <label>Date: </label>
          <input type="date" name="date" value={toDo.date} onChange={inputChanged}/>
        <label>Priority: </label>
          <input type="text" name="priority" value={toDo.priority} onChange={inputChanged}/>
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteToDo}>Delete</button>
      </form>
      <div
      className="ag-theme-material"
      style={{
        width: '80%',
        height: 700,
        margin: 'auto'}}
      >
        <AgGridReact
          ref={gridRef}
          onGridReady={
            params => gridRef.current = params.api
          }
          rowSelection='single'
          columnDefs={columns}
          rowData={todos}
          animateRows={true}
        >
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;

