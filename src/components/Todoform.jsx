import React from 'react';
import { IconContext } from "react-icons";
import { MdAddCircleOutline } from "react-icons/md";
import '../styles/todostyle.css';

class Todoform extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

  render() {
    return (
      <div className='todoFormContainer'>
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input id='addTodoInput' placeholder='Enter a task' size="auto" onChange={(e) => this.updateInput(e)} type="text"></input>
          <IconContext.Provider value={{ className: 'react-icons' }}>
          <button type='submit'><MdAddCircleOutline/>Add</button>
          </IconContext.Provider>
        </form>
      </div>
    );
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {      
      if (this.state.todo !== '') {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo)
        document.getElementById('addTodoInput').value = '';
        this.setState({todo: ''})
      } else {
        window.alert('Enter a task below')
      }
  }

}
export default Todoform;
