import {ADD_TODO} from '../action/index';
import {combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
export function addTodoReducer (state=[],action){
    console.log('cehck before switch',state,action)
    switch (action.type) {
        case ADD_TODO:
        console.log('check praram',action,state)
        return (
            state = [...state,{todo : action.payload, id : action.id}]);
       default: return state;
            
    }
}
const rootReducer = combineReducers({
    todos : addTodoReducer,
    form : formReducer
});
export default rootReducer;