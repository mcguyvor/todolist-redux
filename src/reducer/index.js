import {ADD_TODO,TOGGLE_TODO,VISIBILITY_FILTER_ALL,VISIBILITY_FILTER_COMPLETED,VISIBILITY_FILTER_TODO} from '../action/index';
import {combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
export function addTodoReducer (state=[],action){
    console.log('cehck before switch',state,action)
    switch (action.type) {
        case ADD_TODO:
        return (
            state = [...state,{todoText : action.payload, id : action.id,completed : action.completed}]);
        case TOGGLE_TODO:
        return state.map(idx=>
            idx.id===action.id ? {...idx,completed : !idx.completed} : idx
            )
       default: return state;
            
    } 
}
export function visibilityFilter (state={seeAll : 'seeAll'},action){
   console.log('state see all is', state)
    switch (action.type){
        case VISIBILITY_FILTER_ALL:
        return (
            state={seeAll:'seeAll'}
        );
        case VISIBILITY_FILTER_COMPLETED:
        return(
         state = {seeAll:'completed'});
        case VISIBILITY_FILTER_TODO:
        return ( 
            state = {seeAll:'todo'});
        default: return state;
    }
}
const rootReducer = combineReducers({
    todos : addTodoReducer,
    form : formReducer,
    filter : visibilityFilter
});
export default rootReducer;