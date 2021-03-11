import { bindActionCreators } from "redux"

const intialState = {
    data : [],
}

const todos = (state=intialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,   //step 9th start
                data:[
                    ...state.data,
                    {
                        message:action.message,
                        id: state.data.length,
                    }
                ]           //step 9th ends
            }
        case 'DELETE_TODO':
            const  todos = state.data.filter((todo) => todo.id !== action.id)      //step 14th start  
            return {
                ...state,
                data:todos,                  //step 14th ends
            }

        case 'EDIT_TODO' :                  //step 17th start      
            return {
                ...state,
                data: [...state.data.filter((todo) => todo.id !== action.id),
                    {message:action.message, id:action.id}] 
        
            }                               //step 17th start 

        default:
            return state   
    }
}

export default todos