import React from "react";
import Todoitem from "./Todoitem";
//import * as BootStrap from "react-bootstrap";
import '../styles/todostyle.css';

class Todolist extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div className='card'>
          {todos.map((_todo, _index) => {
            return (
                <Todoitem
                  deleteTodoFn={this.deleteTodo}
                  updateTodoFn={this.updateTodo}
                  key={_index}
                  todo={_todo}
                >
                  {_todo}
               </Todoitem>
            );
          })}
      </div>
    );
  }
  updateTodo = (todo) => {
    this.props.updateTodoFn(todo);
  };

  deleteTodo = (todo) => {
    this.props.deleteTodoFn(todo);
  };
}
export default Todolist;
