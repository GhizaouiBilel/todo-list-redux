import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/action/todosActions'
import "./AddTask.css"
const AddTask = () => {
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const handleAdd=() =>{
        if(text){
            dispatch(addTask({id:Math.random(),task:text,isDone:false}))
            setText("")
        }
        else{
            alert("please enter task")
        }
    }
    
    return (
        <div>
            <input type="text" onChange={(e)=> setText(e.target.value)} value={text}/>
            <button className='addbutton' onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTask
