const ADD_TODO = 'ADD_TODO'

export const addTodo = (message) => ({
    type : ADD_TODO,
    message: message,
})

const DELETE_TODO = 'DELETE_TODO'

export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    id,
})


const EDIT_TODO = 'EDIT_TODO'           //step 16  start

export const editTodo = ({message,id}) => ({
    type : EDIT_TODO,
    message,
    id,
})                                      //step 16  ends


