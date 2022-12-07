import React, {Component} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import NewTodo from './NewTodo';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        }
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

    }

    addTodo(event) {

        var key = "903f35-a4485e-c2e25d-aff68d-158cdb";
        var self = this;
        event.preventDefault();

        var data = {
            text: this.state.input
        }

        var displayRequest = new XMLHttpRequest();

        displayRequest.onreadystatechange = function () {

           // Wait for readyState = 4 & 200 response
           if (this.readyState == 4 && this.status == 200) {

                if(!data.text || /^\s*$/.test(data.text)){
                    return;
                }

                self.setState({
                    todos: [...self.state.todos, JSON.parse(this.responseText)]
                });


            } else if (this.readyState == 4) {

            // this.status !== 200, error from server
            console.log(this.responseText);

            }

        };

        displayRequest.open("DELETE", "https://cse204.work/todos/", true);
        displayRequest.setRequestHeader("Content-type", "application/json");
        displayRequest.setRequestHeader("x-api-key", key);
        displayRequest.send(JSON.stringify(data));

        this.setState({
            input: ''
        });


    }


    onChange(event) {
        this.setState({
            input: event.target.value
        });
    }



    updateTodo(event) {

        var key = "903f35-a4485e-c2e25d-aff68d-158cdb";
        var self = this;
        var todoID = event.target.id;


        var data = {
            text: this.state.input
        }

        if(!data.text || /^\s*$/.test(data.text)){
            return;
        }

        var updateRequest = new XMLHttpRequest();

        updateRequest.onreadystatechange = function () {

           // Wait for readyState = 4 & 200 response
           if (this.readyState == 4 && this.status == 200) {

                if(!data.text || /^\s*$/.test(data.text)){
                    return;
                }

                self.setState(
                
                    prev => prev.map(item => (item.id === todoID ? data.text : item))

                )
                   


            } else if (this.readyState == 4) {

            // this.status !== 200, error from server
            console.log(this.responseText);

            }

        };

        updateRequest.open("DELETE", "https://cse204.work/todos/", true);
        updateRequest.setRequestHeader("Content-type", "application/json");
        updateRequest.setRequestHeader("x-api-key", key);
        updateRequest.send(JSON.stringify(data));

        this.setState({
            input: ''
        });


    }


    onChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    

      //remove Todo
   removeTodo(event) {

    var key = "903f35-a4485e-c2e25d-aff68d-158cdb";
    var deleteRequest = new XMLHttpRequest();
    var todoID = event.target.id;
    var self = this;

    deleteRequest.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            const updatedList = self.state.todos.filter(todo => todo.id !== todoID);
            
            self.setState({
                todos: updatedList
            });

        } else if (this.readyState == 4) {

            // this.status !== 200, error from server
            console.log(this.responseText);


        }

    };

    
    deleteRequest.open("DELETE", "https://cse204.work/todos/" + todoID, true);
    deleteRequest.setRequestHeader("Content-type", "application/json");
    deleteRequest.setRequestHeader("x-api-key", key);
    deleteRequest.send();

    


  }


  render() {return (
    <div>
      <h1>To Do List</h1>
      <NewTodo addTodo = {this.addTodo}
            onChange = {this.onChange}
            updateTodo = {this.updateTodo}
            input = {this.state.input}/>
      <Todo todos ={this.todos} completeTodo={this.completeTodo} removeTodo={this.removeTodo} updateTodo={this.updateTodo}/>
      {this.state.todos.map((todo) =>
                    <Todo key = {todo.id}
                    id = {
                      todo.id
                    }
                    completed = {
                        todo.completed
                    }
                    text = {
                        todo.text
                    }
                    deleteTodo = {
                        this.deleteTodo
                    }
                    />

                )
                
                }
            </div>
         );

            }
        }


        export default TodoList