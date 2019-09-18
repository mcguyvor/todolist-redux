import {ADD_TODO} from '../action/index';
import {combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
export function addTodoReducer (state=[],action){
    switch (action.type) {
        case ADD_TODO:
        return state = [...state,action.payload,action.id];
       default: return state;
            
    }
}
const rootReducer = combineReducers({
    todos : addTodoReducer,
    form : formReducer
});
export default rootReducer;