import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action/index'
import TodoForm from'./TodoForm'
import Todo from './Todo'
class TodoList extends Component{
    /*constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleClick(e){
        let value = e.value;
        //e.preventDefault();
        return(this.props.addTodo(value));
        
    }
    handleChange(e){
        return e.target.value;
            //this.props.addTodo(e.target.value)
        
    }*/
    submit = values =>{
        console.log(values)
        return addTodo(values);
    }
    render(){
        return(
            <div>
                <h1>TodoList</h1>
                <TodoForm onSubmit={this.submit}/>
                <Todo/>
            </div>
        );
    }
}
//export default TodoList;
function mapStatetoProps(){
    console.log('test')
}
export default connect(mapStatetoProps,{addTodo})(TodoList);