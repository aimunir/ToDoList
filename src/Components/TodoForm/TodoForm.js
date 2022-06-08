import React, {useState} from 'react'
import './TodoForm.css'

function TodoForm() {
   const [input,setInput]=useState('')

   const handleChange=(e)=>{
    setInput(e.target.value);
   }

   const handleSubmit=(e)=>{
        e.preventDefault();
        setInput('');

   }

  return (
     <form className='todo-form' onClick={handleSubmit} >
         <input type="text" 
         placeholder='Enter Your Todo' 
         value={input} name="text" 
         className='todo-input'
         onChange={handleChange}
         />
         

      <button className='todo-button'> Add todo</button>
     </form>

     

    )
}

export default TodoForm


