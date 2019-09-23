import React, { Component } from 'react';
import '../style/TodoList.css';
import {connect} from 'react-redux';
import {VISIBILITY_FILTER_ALL,VISIBILITY_FILTER_COMPLETED,VISIBILITY_FILTER_TODO,visibilityFilterActionSeeAll,visibilityFilterActionCOMPLETED,visibilityFilterActionTODO} from '../action/index'
class Filter extends Component{
    render(){
        return(
            <div className='d-flex justify-content-center'>
                <button type ='button'className='btn btn-primary mr-3 ' onClick={this.props.visibilityFilterActionSeeAll}>See All</button>                
                <button type='button'className='btn btn-danger mr-3' onClick={this.props.visibilityFilterActionCOMPLETED}>See All completed Todo</button>
            </div>
        );
    }
}

export default connect(null,{visibilityFilterActionSeeAll,visibilityFilterActionCOMPLETED,visibilityFilterActionTODO})(Filter);