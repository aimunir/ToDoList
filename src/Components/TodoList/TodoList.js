import React, {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'

function TodoList() {
    const[todos,setTodos]=useState([])

    const addTodo=todo=>{
        if(!todo.text|| /^\s*$/.test(todo.text)){
            return
        }
        const newTodos=[todo,...todos]
        setTodos(newTodos)

        console.log(newTodos);
    }

  return (
    <div>
        <h1>What's Plan For Today</h1>
        <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList