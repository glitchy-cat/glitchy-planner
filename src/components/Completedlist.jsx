import React from 'react';
import Todoitem from './Todoitem';
import Todolist from './Todolist';

class Completeditem extends React.Component {
    render() {

        const { todos } = this.props;

        return(
            <div className='completedListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                        <Todoitem updateTodoFn={this.updateTodo} key={_index} todo={_todo}>{_todo}</Todoitem>
                        )
                    })
                }               
            </div>
        );
    }
    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

}
export default Completeditem;