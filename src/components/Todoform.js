import React from 'react';

class Todoform extends React.Component {
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
    console.log(e);
  };

  submitTodo = (e) => {
      e.preventDefault();
      console.log('submit');
  }
  
}
export default Todoform;
