import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../taskItem/TaskItem'


const TaskList = () => {
    const tasks = useSelector(state => state.todoReducer.todos)
    console.log(tasks)
    return (
        <div>
            { tasks.map ((elt,index) => <TaskItem todo={elt} key={index}/>)}
        </div>
    )
}

export default TaskList
