import React from "react";
import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";
import Navbar from "./components/Navbar";
import "./styles/todostyle.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      completed: [],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="greeting">
          <h1>Welcome to Glitchy-Planner :)</h1>
          <h2>What are your plans today?</h2>
        </div>
        <div className="App">
          <Todoform addTodoFn={this.addTodo} />
          <Todolist
            deleteTodoFn={this.deleteTodo}
            updateTodoFn={this.updateTodo}
            todos={this.state.todos}
          />
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
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem("todos"));
  };
  deleteTodo = (thisTodo) => {
    let visibleTodos = this.state.todos; //Sets visibleTodos equal to the todos array from line 10.
    //finds the index in visibleTodos that matches the entry in 'complete' button.
    let index = visibleTodos.findIndex((item) => {
      return item.text === thisTodo.text;
    });
    visibleTodos.splice(index, 1); //Once index is found, use splice to remove the entry from the todos array
    this.setState({ todos: visibleTodos });
    localStorage.setItem("todos", JSON.stringify(visibleTodos));
    // console.log(index);
    // console.log(visibleTodos);
  };
}

export default App;
