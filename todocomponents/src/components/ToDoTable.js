import React from 'react';

export default function ToDoTable(props){

    return(
        <div>
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
                    props.todos.map((toDo, index) =>
                    <tr key={index}>
                        <td>{toDo.date}</td>
                        <td>{toDo.desc}</td>
                        <td><button onClick={() => props.deleteToDo(index)}>Delete</button></td>
                    </tr>
                    )
                }  
                </tbody>
            </table>
        </div>
    );
}