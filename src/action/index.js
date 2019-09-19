
export const ADD_TODO = 'ADD_TODO';
 let nextTodoId = 0;
export const addTodo = values =>{
    return {
        type: ADD_TODO,
        payload : values,
        id : nextTodoId++
            }
    
}
        
    

