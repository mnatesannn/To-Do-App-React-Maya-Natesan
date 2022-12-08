import React, {Component} from 'react'
import {RiCloseCircleLine} from "react-icons/ri"
import {TiEdit} from "react-icons/ti"
import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completed
    }

    this.completeTodo = this.completeTodo.bind(this);

    
  
}

completeTodo(event) {

  var key = "903f35-a4485e-c2e25d-aff68d-158cdb";
  var todoID = event.target.parentNode.id; //check the html for the class
  var self = this;

  console.log("in completeTodo");
  console.log(todoID);

  var data = {
    completed: true
  };

  var xhttp2 = new XMLHttpRequest();


  xhttp2.onreadystatechange = function () {


  // Wait for readyState = 4 & 200 response
  if (this.readyState == 4 && this.status == 200) {

      self.setState({
        completed: true
    });

  } else if (this.readyState == 4) {

      // this.status !== 200, error from server
      console.log(this.responseText);

  }

  };

  xhttp2.open("PUT", "https://cse204.work/todos/"+todoID, true);
  xhttp2.setRequestHeader("Content-type", "application/json");
  xhttp2.setRequestHeader("x-api-key", key);
  xhttp2.send(JSON.stringify(data));



}



render() {

    var className = "todo-row";
    if(this.state.completed) {

      className = 'todo-row complete'

    }

    return (


      <div id={this.props.id} className={className}>
      <button className="check" onClick={this.completeTodo}>&#10003;</button>
      <p>{this.props.text}</p>
      <button className="delete" onClick={this.props.removeTodo}>-</button>
    </div>

      );


}

}

export default Todo;



// function Todo({todos, completeTodo, removeTodo, updateTodo}) {
//   const[edit, setEdit] = useState({

//     id: null,
//     value: ""

//   })


//   const submitUpdate = value => {

//     updateTodo(edit.id, value)
//     setEdit({
//       id: null,
//       value: ''
//     })
//   }


//   if(edit.id){
//     return <TodoForm edit = {edit} onSubmit = {submitUpdate} />
//   }


//   return todos.map((todo, index) => (

//     <div  
//     className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
//     key = {index}>  
    
//       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//         {todo.text}
//       </div>

//       <div className="icons">

//         <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon"/>
//         <TiEdit onClick={() => setEdit({id:todo.id, value: todo.text})} className="edit-icon"/>
//       </div>

//     </div>



//   ))
// }

