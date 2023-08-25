import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {GoPencil} from 'react-icons/go'



const Todo = ({ task, deleteTodo, editTodo }) => {
  
  return (
    <div className='addedTodo'>
      <p>{task.task}</p>
      <div>
        <GoPencil id="pen" className='icon' onClick={()=> editTodo(task.id)}/>
        <BsTrash id="trash" className='icon' onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo