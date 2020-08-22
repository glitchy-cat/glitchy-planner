import React from "react";
import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";
import "./App.css";
import Completedlist from "./components/Completedlist";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      completed: []
      
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <h1>Tasks</h1>
        <div className='App'>
          <Todoform addTodoFn={this.addTodo}/>
          <Todolist deleteTodoFn={this.deleteTodo} updateTodoFn={this.updateTodo} todos={this.state.todos}/>
          <div>
          <Completedlist completedSt={this.state.completed}/>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }
    deleteTodo = (thisTodo) => {
      let visibleTodos = this.state.todos; //Sets visibleTodos equal to the todos array from line 10.
      //finds the index in visibleTodos that matches the entry in 'complete' button.
      let index = visibleTodos.findIndex((item) => { 
        return item.text === thisTodo.text 
      })
      visibleTodos.splice(index, 1) //Once index is found, use splice to remove the entry from the todos array
      this.setState({ todos: visibleTodos });
      localStorage.setItem('todos', JSON.stringify(visibleTodos));
     // console.log(index);
      // console.log(visibleTodos);
    };

    updateTodo = (thisTodo) => {
      let completedTodos = this.state.completed; //Sets completedTodos equal to completed array from line 11.
      let visibleTodos = this.state.todos; //Sets visibleTodos equal to the todos array from line 10.
      //finds the index in visibleTodos that matches the entry in 'complete' button.
      let index = visibleTodos.findIndex((item) => { 
        return item.text === thisTodo.text  //returns the index when the text i chose is equal to the entry in todos.
      })
      visibleTodos.splice(index, 1) //Once index is found, use splice to remove the entry from the todos array
      completedTodos.push(thisTodo) //Pushes thisTodo into the "completed" array.
      this.setState({ todos: visibleTodos });
      localStorage.setItem('todos', JSON.stringify(visibleTodos));
     // console.log(index);
      // console.log(visibleTodos);
      // console.log(completedTodos);
    };

}

export default App;
