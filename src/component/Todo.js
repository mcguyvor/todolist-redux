 import React, { Component } from 'react'
 import '../style/Todo.css';
 import TodoList from'./TodoList';
class Todo extends Component{
    render(){
        return(
            <div className='Todo'>
                <TodoList/>
            </div>
        );
    }
}
export default Todo;