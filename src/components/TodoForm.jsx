import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const onChangeFunction = (e) => {
    setValue(e.target.value);
  }
  const onSubmitFunction = (e) => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={onSubmitFunction}>
      <input type="text" value={value} className="todo-input" placeholder="Write Here" onChange={onChangeFunction} required/>
      <button type="submit" className="todo-btn">Add</button>
    </form>
  )
}

export default TodoForm