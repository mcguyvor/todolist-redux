export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const VISIBILITY_FILTER_ALL = 'VISIBILITY_FILTER_ALL';
export const VISIBILITY_FILTER_COMPLETED = 'VISIBILITY_FILTER_COMPLETED';
export const VISIBILITY_FILTER_TODO = 'VISIBILITY_FILTER_TODO';


 let nextTodoId = 0;
export const addTodo = values =>{
    return( {
        type: ADD_TODO,
        payload : values,
        id : nextTodoId++,
        completed : false
            });
};
export const toggleTodo = id=>{
    return({
        type : TOGGLE_TODO,
        id
    });
};
export const visibilityFilterActionSeeAll = ()=>{
    return({
        type:VISIBILITY_FILTER_ALL
    })
};
export const visibilityFilterActionCOMPLETED = ()=>{
    return({
        type:VISIBILITY_FILTER_COMPLETED
    })
};export const visibilityFilterActionTODO = ()=>{
    return({
        type:VISIBILITY_FILTER_TODO
    })
};
    

