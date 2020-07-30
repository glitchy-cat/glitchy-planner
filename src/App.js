import React from "react";
import Todolist from "./components/Todolist";
import Todoitem from "./components/Todoitem";
import Todoform from "./components/Todoform";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div>
        <Todoform addTodoFn={this.addTodo}/>
        <Todolist todos={this.state.todos}/>
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
    await this.setState({ todos: [...this.state.todos, todo] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  };
}

export default App;
