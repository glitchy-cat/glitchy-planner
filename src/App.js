import React from "react";
import Todolist from './components/Todolist';
import Todoitem from './components/Todoitem';
import Todoform from './components/Todoform'
import "./App.css";

class App extends React.Component {

    constructor() {
      super();
      this.state = {
        todos: []

      };
    }
  
    render() {
      return(
        <div>
          <Todoform/>
        </div>
      );
  }
  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log( 'No todos');
    }
  }

}

export default App;
