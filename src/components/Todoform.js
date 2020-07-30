import React from 'react';

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
          <input onChange={(e) => this.updateInput(e)} type="text"></input>
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
      e.preventDefault();
      this.props.addTodoFn(this.state.todo)
  }

}
export default Todoform;
