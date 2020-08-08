import React from 'react';
import Todoitem from './Todoitem';
import Todolist from './Todolist';

class Completeditem extends React.Component {
    render() {

        const { todos } = this.props;

        return(
            <div className='completedListContainer'>
                <h1>Completed</h1>
                
                        
            </div>
        );
    }
    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

}
export default Completeditem;