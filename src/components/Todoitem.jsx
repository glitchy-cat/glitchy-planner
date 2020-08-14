import React from "react";
import  trash from "../icons/trash.svg";
import '../styles/todostyle.css';

class Todoitem extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <div className="todoItem">
        {todo.text}
        <img className="trashBin" src={trash} alt="" onClick={this.deleteTodo}></img>
        <button type="button" className="btn btn-primary" onClick={this.toggleTodo} >Complete</button>
      </div>
    );
  }

  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  }; 

  deleteTodo = () => {
    this.props.deleteTodoFn(this.props.todo);
  };
}
export default Todoitem;
