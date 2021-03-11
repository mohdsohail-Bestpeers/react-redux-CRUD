import './List.css'
import {connect, useDispatch} from 'react-redux'

import {deleteTodo, editTodo} from '../../actions/index'

import React, {useState} from 'react'           //step 18 for update start



const List = (props) => {

    const [curr,setCurr] = useState({})
    const [isUpdate, setIsUpdate] = useState(false);        
    const dispatch = useDispatch()
    const [input, setInput] = useState('');

   function editItemToState(e){
        e.preventDefault()
        setIsUpdate(false)
        dispatch(editTodo({message:input, id:curr.id}))
    }

    const renderForm = () =>{
        return (
            <form onSubmit={editItemToState}>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" defaultValue={props.todo}/>
                <button type="submit">Edit Todo</button>
            </form>
        )
    }

    const onEditClick = (todo) => {
        setCurr(todo)
        setIsUpdate(true)
        setInput(todo.message);
    }                                                       //step 18 for update end
    
    const renderItem = () => {                              //step 18 for update
        return (
            <>
            <br/>
              <table>
                  <thead>
                      <tr>
                          <th>Data</th>
                          <th>Edit Button</th>
                          <th>Delete Button</th>
                      </tr>
                  </thead>
                      {props.todos.map((todo, index) => (
                  <tbody key={index}>
                      <tr>
                          <td>{todo.message} </td>
                          <td><button onClick={() => onEditClick(todo)}>Edit</button></td>       {/*add button step 15th   */}
                          <td><button onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button></td>    {/*add button step 13th   */}
                      </tr>
                  </tbody>
                  ))}
              </table>
          </>   
        )
    } 


    return (
        <>
             {isUpdate ? renderForm() : renderItem()}                   {/* step 18 for update */}
       </>
    )
}

const mapStateToProps = (state) => ({
    todos:state.todos.data,
})

export default connect(mapStateToProps)(List)



