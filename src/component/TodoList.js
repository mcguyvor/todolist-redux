import React, { Component } from 'react';
import '../style/TodoList.css';
import Form from'./Form';
import SingleList from'./SingleList';

class TodoList extends Component{
    render(){
        return(
        <div  className='TodoList'>
            <div className='Title'>
                <h1>TodoList</h1>
                <Form/>
                <SingleList/>
                
            </div>
            
        </div>
        );
    }
}
export default TodoList;