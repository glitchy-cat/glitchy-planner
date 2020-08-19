import React from 'react';
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
          <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type="text"></input>
          <button type='submit'>Add Task</button>
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
