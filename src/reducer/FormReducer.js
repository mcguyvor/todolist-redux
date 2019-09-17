import {TodoCreate} from '../action/TodoCreate';
export default function(state=[],action){
    switch(action.type){
        case 'todo-create':
        return action.payload;
        default : return state;
    }
}