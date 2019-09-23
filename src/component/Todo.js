import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../action/index'
class Todo extends Component{
  //style={{textDecoration: idx.completed ? 'line-through' :'none'}}
    renderTodo(todos){
        console.log('id',todos);
        return todos.map(idx=><li className ={idx.completed ? 'list-group-item-action list-group-item mb-3 list-group-item-success':'list-group-item mb-3 list-group-item-action list-group-item-primary'}   key={idx.id} onClick={()=>this.props.toggleTodo(idx.id)}>{idx.todoText.todo}</li>)
    }
    renderOnlyCompleted(todos){
         const filterCompleted = todos.filter(idx=> idx.completed==true);
         console.log('renderonlycom function',filterCompleted);
         return filterCompleted.map(idx=><li className ={idx.completed ? 'list-group-item-action list-group-item mb-3 list-group-item-success':'list-group-item mb-3 list-group-item-action list-group-item-primary'}   key={idx.id} onClick={()=>this.props.toggleTodo(idx.id)}>{idx.todoText.todo}</li>)
        };

            
    
    render(){
        return(
            <div>
                <ul className='list-group mt-3'>
                    <div className='row d-flex justify-content-center'>
                    <div className='col-6 text-center'>
                    {this.props.filter.seeAll == 'seeAll'? this.props.todos&&Array.isArray(this.props.todos)&&this.renderTodo(this.props.todos) : null}
                    {this.props.filter.seeAll == 'completed'? this.props.todos&&Array.isArray(this.props.todos)&&this.renderOnlyCompleted(this.props.todos): null}

                    </div>
                    </div>
                </ul>
            </div>
        )
    }
}
const mapStatetoProps= state=>({
    todos : state.todos,
    filter:state.filter
});
export default connect(mapStatetoProps,{toggleTodo})(Todo);
