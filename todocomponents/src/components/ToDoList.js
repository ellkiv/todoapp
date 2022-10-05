import React, { useState } from 'react';

export default function ToDoList(props){

    return(
        <div>
        <form>
        <h4>Add ToDo:</h4>
            <label>Description: </label>
            <input type="text" name="desc" value={props.toDo.desc} onChange={props.inputChanged}/>
            <label>Date: </label>
            <input type="text" name="date" value={props.toDo.date} onChange={props.inputChanged}/>
            <button onClick={props.addTodo}>Add</button>
        </form>

        </div>
    );
}