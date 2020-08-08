import React from "react";
import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>Tasks</h1>
        <Todoform addTodoFn={this.addTodo}/>
        <Todolist deleteTodoFn={this.deleteTodo} updateTodoFn={this.updateTodo} todos={this.state.todos}/>

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

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed
        }
      else
        return _todo  
    });
    await this.setState({todos: newTodos});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    
  }

    deleteTodo = (thisTodo) => {
      let visibleTodos = this.state.todos;
      visibleTodos = visibleTodos.filter((visibleTodos) => visibleTodos !== thisTodo);
      this.setState({ todos: visibleTodos });
      localStorage.setItem('todos', JSON.stringify(visibleTodos));
    };
    /*
    addCompleted = (todo) => { //Unfinished function. Still working on filtering out todos that are false and rendering a new list with completed todos 
      let completedTodos = this.state.todos;
      completedTodos = todos.filter((completedTodos) => todo.completed == false);
      this.setState({ todos: completedTodos});
      localStorage.SetItem
    }
 */
}

export default App;
