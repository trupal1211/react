import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let taskInput = useRef()
  const [LoaderStatus , setLoaderStatus]=useState(false)
  
  function AddTaskHandler(){
    setLoaderStatus(true)

    let todo=taskInput.current.value;
    // console.log(todo)

    let todoData={
      title:todo
    }
    // console.log(todoData)

    fetch('https://mern-320-b4d7d-default-rtdb.firebaseio.com/todos.json',{
      method:'post',
      body:JSON.stringify(todoData)      
    }).then(()=>{
      console.log('data saved in firebase')
      setLoaderStatus(false)
    })
    displayTask();
  }

  function displayTask(){

    fetch('https://mern-320-b4d7d-default-rtdb.firebaseio.com/todos.json').then((data)=>{
       return data.json()
    }).then((data)=>{
      console.log(data)
    })
  }

  return (
    <>
    <h2>Manage your task in one Place</h2>

    <div className='flex'>
     <input ref={taskInput} type="text" placeholder='enter the task' />
     <button onClick={AddTaskHandler}>
        <div>Add Task</div>
        <div className={LoaderStatus==true?'loader':''}></div>     
     </button>

    </div>
    </>
  )
}

export default App
