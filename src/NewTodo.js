import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div className = "input-container">

            <h1 id="top">Mariclare and Maya's To Do List</h1>
            <h1 id="top_alt">To Do List</h1>
            
            <div className="form-container card card-body bg-light" id="input_box">
                <form id="input-form">
                    <div className="input-form-group">
                        <label for="task"><h4>Add to-do:</h4></label>
                        <input type="text" className="form-control" id="task" required></input>
                        <input id="add" type="submit" value="Add"> </input>
                    </div>
                </form>
            </div>  
        </div>  
    );
  }
}

export default NewTodo;
