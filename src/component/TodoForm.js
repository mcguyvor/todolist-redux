 import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from'react-redux'
import {addTodo} from '../action/index'
 class TodoForm extends Component{
     //submit = values =>{
       //  console.log(values)
    // };
    render(){
        const {handleSubmit} =this.props;
        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor='todo'>Add todo</label>
                <Field name='todo'component='input'type='text'/>
                <button type='submit'> add</button>
            </form>
        );
    }
}
TodoForm = reduxForm({
    form : 'todo',
   
})(TodoForm)
function mapStatetoProps(state){

console.log(state.form);

}
export default connect(mapStatetoProps,{addTodo})(TodoForm);