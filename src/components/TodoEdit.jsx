import React, {useState} from 'react'

const TodoEdit = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const onChangeFunction = (e) => {
    setValue(e.target.value);
  }
  const onSubmitFunction = (e) => {
    e.preventDefault();
    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={onSubmitFunction}>
      <input type="text" value={value} className="todo-input" placeholder="Edit Todo" onChange={onChangeFunction}/>
      <button type="submit" className="edit-btn">Update</button>
    </form>
  )
}

export default TodoEdit