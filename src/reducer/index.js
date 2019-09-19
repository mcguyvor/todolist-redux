import {ADD_TODO,TOGGLE_TODO} from '../action/index';
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
const rootReducer = combineReducers({
    todos : addTodoReducer,
    form : formReducer
});
export default rootReducer;