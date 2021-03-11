import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../../actions'   //8th step

const AddTodo = (props) => {
    return (
        <form onSubmit={(event) =>{
            event.preventDefault()
            let input = event.target.userInput.value
            //console.log(input)
            
            props.dispatch(addTodo(input))  //8th step
            event.target.userInput.value = ""   //10th step it blanks input field after submit data
        }}>
            <input type="text" name="userInput" placeholder="Enter Message"/>
            <button>Submit</button>
        </form>
    )
}

export default connect() (AddTodo)
