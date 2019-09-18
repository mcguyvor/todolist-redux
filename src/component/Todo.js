import React, { Component } from 'react';
import {connect} from 'react-redux';
class Todo extends Component{
    renderTodo(todos){
        return(
            todos.map(todo=>
                <li>{todo}</li>
                )
        )
            }
    
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos&&Array.isArray(this.props.todos)&&this.renderTodo(this.props.todos)}
                </ul>
            </div>
        )
    }
}
const mapStatetoProps= state=>({
    todos : state.todos
});
export default connect(mapStatetoProps)(Todo);