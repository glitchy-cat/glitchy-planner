import React from 'react';
import Todoitem from './Todoitem';
import Todolist from './Todolist';

class Completedlist extends React.Component {
    render() {

        const { completedSt } = this.props;

        return(
            <div className='completedListContainer'>
                <h1>Completed</h1>
                {
                    completedSt.map((item, index) => {
                        return(
                        <li key={index}>{item.text}</li>
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
export default Completedlist;