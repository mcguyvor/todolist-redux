 import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from'react-redux'
import {addTodo} from '../action/index'
import '../style/TodoList.css'
 class TodoForm extends Component{
     //submit = values =>{
       //  console.log(values)
    // };
     formField=({input,type,name,label})=>{
         return(
            <div className='form-inline'>
                <label className='title mr-2'>{label}</label>
                <input type={type} {...input} className='form-control mr-3'/>
                <button className='btn btn-primary' type='submit'> add</button>
            </div>
                )};
    render(){
        const {handleSubmit,addTodo} =this.props;
        return(
               <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit(addTodo)}>
                <Field name='todo'component={this.formField}type='text' label='Add todo'/> 
                </form>
                </div>
        );
    }
}
TodoForm = reduxForm({
    form : 'todo',
   
})(TodoForm)

export default connect(null,{addTodo})(TodoForm);