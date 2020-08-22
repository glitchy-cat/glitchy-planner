import React from "react";
import trash from "../icons/trash.svg";
import "../styles/todostyle.css";

class Todoitem extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  render() {
    const { todo } = this.props;

    return (
      <div className="todoItemContainer" key={this.props._index}>
        {!this.state.editing && (
          <div
            className="todoItem"
            onDoubleClick={() => this.setState({ editing: true })}
          >
            {todo.text}
          </div>)}
        <div className="options">
        <img
          className="trashBin"
          src={trash}
          alt=""
          onClick={this.deleteTodo}
        ></img>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.setState({ editing: true })}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.toggleTodo}
        >
          Complete
        </button>
        {this.state.editing && (
          <div>
            <input
              onBlur={() => {
                this.setState({ editing: false });
                todo.text = this.state.updatedEntry;
              }}
              type="text"
              placeholder={todo.text}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ updatedEntry: e.target.value });
              }}
              value={this.state.updateEntry}
            />
            <button
              onClick={() => {
                this.setState({ editing: false });
                todo.text = this.state.updatedEntry;
              }}
            >
              Submit
            </button>
          </div>
        )}
        </div>
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
