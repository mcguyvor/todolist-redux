import React, { Component,PropsTypes } from 'react';
import {Field,reduxForm} from'redux-form';
import uuid from 'uuid';
import {TodoCreate} from '../action/TodoCreate';
class Form extends Component{
    render(){
        const {handleSubmit}= this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(TodoCreate)} >
                    <label>Add todo</label>
                    <Field 
                    key={uuid()}
                    label='Add todo'
                    name='todo'
                    type='text'
                    component='input'
                    />
                    <button type='submit'>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

Form = reduxForm({form :'todoForm'})(Form)
export default Form;
