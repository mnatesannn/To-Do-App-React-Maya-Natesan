import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (

      <div className = "to-do-container">

        <form id="to-do-form">

            <div className="to-do-group" id = "list">

              <NewTodo />
              <Todo />

            </div>

        </form>

      </div>

    );
  }
}

export default App;
