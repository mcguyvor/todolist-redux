export const TodoCreate =values=>{
    return dispatch=>{
        dispatch({
            type: 'todo-create',
            payload:values
        });
    } 
}


    
