import React from 'react';
import Todoitem from './Todoitem';

class Todolist extends React.Component {
    render() {

        const { todos } = this.props;

        return(
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                        <Todoitem deleteTodoFn={this.deleteTodo} updateTodoFn={this.updateTodo} key={_index} todo={_todo}>{_todo}</Todoitem>
                        )
                    })
                }               
            </div>
        );
    }
    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

    deleteTodo = (todo) => {
        this.props.deleteTodoFn(todo)
    }

}
export default Todolist;