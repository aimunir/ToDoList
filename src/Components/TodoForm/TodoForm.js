import React, {useState} from 'react'
import './TodoForm.css'

function TodoForm(props) {
   const [input,setInput]=useState('')

   const handleChange=(e)=>{
    setInput(e.target.value);
   }

   const handleSubmit=(e)=>{
       e.preventDefault();

       props.onSubmit({
        id:Math.floor(Math.random()*1000),
        text:input
       });
       setInput('');

   }

  return (
     <div className='todoForm'>
         <form className='todo-form' onClick={handleSubmit} >
         <input type="text" 
         placeholder='Enter Your Todo' 
         value={input} name="text" 
         className='todo-input'
         onChange={handleChange}
         />
         

      <button className='todo-button'> Add todo</button></form>
     
     </div>

    )
}

export default TodoForm


