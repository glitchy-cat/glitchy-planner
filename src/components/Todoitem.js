import React from "react";
import './todostyle.css'; 

class Todoitem extends React.Component {
  render() {
    const { todo } = this.props;

    return <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>{todo.text}</div>;
  }

  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  };
}
export default Todoitem;
