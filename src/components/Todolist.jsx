import React from "react";
import Todoitem from "./Todoitem";
import "../styles/todostyle.css";

class Todolist extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div>
        {todos.map((_todo, _index) => {
          return (
            <Todoitem deleteTodoFn={this.deleteTodo} key={_index} todo={_todo}>
              {_todo}
            </Todoitem>
          );
        })}
      </div>
    );
  }

  deleteTodo = (todo) => {
    this.props.deleteTodoFn(todo);
  };
}
export default Todolist;
