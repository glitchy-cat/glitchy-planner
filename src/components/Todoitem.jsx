import React from "react";
import { IconContext } from "react-icons";
import { GoChecklist } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../styles/todostyle.css";

class Todoitem extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      darkblue: true,
    };
  }

  changeColor = () => {
    this.setState({ darkblue: !this.state.darkblue });
  };

  render() {
    let complete = this.state.darkblue ? "bluebutton" : "greenbutton";
    const { todo } = this.props;

    return (
      <div className="todoItemContainer" key={this.props._index}>
        <IconContext.Provider value={{ className: complete }}>
          <GoChecklist
            onClick={this.changeColor}
            style={{ height: 32, width: 32, margin: 4 }}
          />
        </IconContext.Provider>

        {!this.state.editing && (
          <div
            className="todoItem"
            onDoubleClick={() => this.setState({ editing: true })}
          >
            {todo.text}
          </div>
        )}
        <div className="options">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <FaRegTrashAlt onClick={this.deleteTodo} />
            <FaEdit onClick={() => this.setState({ editing: true })} />
          </IconContext.Provider>
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
