import React, { Component } from 'react';
import './NewTodo.css';
import {RiCloseCircleLine} from "react-icons/ri"
import {TiEdit} from "react-icons/ti"

class NewTodo extends Component {

  render() {
    return (
      <div>
       
          <form  className = "todo-form" id="new-entry" onSubmit={this.props.addTodo}>
              <input  className = "todo-input"  type="text" id="newText" placeholder="Add To Do..." value={this.props.input} onChange={this.props.onChange}/>
              <button className = "todo-button" type="submit" onSubmit={this.props.addTodo} id="submit">ADD</button >
          </form>
        
      


      </div>
    );

  }
}

export default NewTodo;
