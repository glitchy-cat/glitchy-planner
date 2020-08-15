import React from "react";
import  trash from "../icons/trash.svg";
import '../styles/todostyle.css';

class Todoitem extends React.Component {
    constructor() {
      super();
      this.state = { editing: false}
    }

  render() {
    const { todo } = this.props;

    return (
      <div  className="todoItem" key={this.props._index}>
        {
          !this.state.editing && (
           <div onDoubleClick={() => this.setState({ editing: true}) }>{todo.text}</div>
          )
        }
        <img className="trashBin" src={trash} alt="" onClick={this.deleteTodo}></img>
        <button type="button" className="btn btn-primary" onClick={this.toggleTodo} >Complete</button>        
      {
        this.state.editing && (
        <form onSubmit={() => this.setState({ editing: false}) }>
        <input type="text"
         onChange={ (e) => {
           console.log(e.target.value)
            todo.text = e.target.value  //unifinished. changing on console log but not changing on input field
         }}
          value={todo.text} />
          <input type="submit" value="submit" />
          </form>)
      }
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
