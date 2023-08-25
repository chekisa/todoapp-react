import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import TodoEdit from './TodoEdit';
uuidv4();


const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {

  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, isEditing: false}])
    console.log(todos)
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='todoCard'>
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <TodoEdit editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  )
}

export default TodoWrapper