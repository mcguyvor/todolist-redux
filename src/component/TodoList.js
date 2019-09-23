import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action/index'
import TodoForm from'./TodoForm'
import Todo from './Todo'
import '../style/TodoList.css'
import Filter from'./Filter'
class TodoList extends Component{
    
    render(){
        console.log('form value : ', this.props.formValue)
        return(
            <div className='Todolist' >
                <h1>TodoList</h1>
                
                    <TodoForm onSubmit={addTodo(this.props.formValue)}/>
                    <Todo/>
                    <Filter/>
                </div>
            
        );
    }
}
//export default TodoList;
function mapStatetoProps({form}){
    console.log('form todo',form.todo ? form.todo.values : null);
   return {formValue : form.todo ? form.todo.values : null};
   
}

export default connect(mapStatetoProps,{addTodo})(TodoList);