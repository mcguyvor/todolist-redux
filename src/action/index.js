
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
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
        
    

