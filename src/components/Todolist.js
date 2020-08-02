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
                        <Todoitem key={_index} todo={_todo}>{_todo}</Todoitem>
                        )
                    })
                }               
            </div>
        );
    }

}
export default Todolist;