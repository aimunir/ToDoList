import React, {useState} from 'react'
import Todo from '../TOdo/Todo'
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

    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id !==id)
        setTodos(removeArr);
    };



    const completeTodo=id=>{
        let updateTodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    };

  return (
    <div>
        <h1>What's Plan For Today</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList