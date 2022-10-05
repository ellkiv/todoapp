import React, { useState } from 'react';
import ToDoTable from './ToDoTable'

export default function ToDoList(){
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

    return(
        <div>
        <form>
        <h4>Add ToDo:</h4>
            <label>Description: </label>
            <input type="text" name="desc" value={toDo.desc} onChange={inputChanged}/>
            <label>Date: </label>
            <input type="text" name="date" value={toDo.date} onChange={inputChanged}/>
            <button onClick={addTodo}>Add</button>
        </form>
        <ToDoTable todos={todos} deleteToDo={deleteToDo} />
        </div>
    );
}