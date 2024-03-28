// import { useState } from 'react
import './App.css'
import { useRef, useState } from 'react'

// function App() {
//   let nameInput = useRef();
//   let [user , setUser] = useState('coder')

//   function submithandler(){  

//       let name = nameInput.current.value
//       setUser(name)
//       // setUser(nameInput.current.value)
//   }
//   return(
//     <>
//       <h1>welcome to react hooks <span className='color'>@{user}</span></h1>
//       <div className="input-container">
//         <input type="text" ref={nameInput} placeholder='Enter the name' />
//         <button className='btn' onClick={submithandler}>join now</button>
//       </div>
//     </>
//   )
// }



// function App() {
//   let personInput = useRef()
//   let billInput = useRef()
//   let [Result , setResult] = useState('____')

//   function calchandler(){  
//     let avg = (billInput.current.value/personInput.current.value).toFixed(2)   
//     setResult(avg)
//   }
//   return(
//     <>
//       <h1>bill is Rs <span className='color'> {Result} </span> per person</h1>
//       <div className="input-container">

//       <input type="text" ref={billInput} placeholder='Enter the total amount'/>
//         <input type="text" ref={personInput} placeholder='Enter the no. of people'/>

//         <button className='btn' onClick={calchandler}>split it</button>
//       </div>
//     </>
//   )
// }


import Users from './my components/Users'
const tempUsers = [];

function App() {
  let nameInput = useRef();
  let emailInput = useRef();
  let [users, setUsers] = useState([])

  function addUserHandler() {

    let Tname = nameInput.current.value
    let Temail = emailInput.current.value
    console.log(Tname,Temail)

    let currentUser = {
      name: Tname,
      email: Temail
    }
    // console.log(currentUser)

    // Users.push(currentUser) OR setUsers.push(..) not work for display updated content

    // tempUsers.push('currentUser : ',currentUser)
    // setUsers(tempUsers)                            still not work

    setUsers([...users,currentUser])

    // console.log(users)

  }

  // function addUserHandler() {
  //   let name = nameInput.current.value;
  //   let email = emailInput.current.value;
  //   let currentUser = {
  //     name: name,
  //     email: email
  //   }
  //   setUsers([...users, currentUser])

  //   console.log("main users", users)
  // }

  return (
    <>
      <h1>welcome to react hooks <span className='color'>@coder</span></h1>
      <div className="input-container">
        <input type="text" ref={nameInput} placeholder='Enter the name' />
        <input type="text" ref={emailInput} placeholder='Enter the email' />
        <button className='btn' onClick={addUserHandler}>Add User</button>
      </div>

      <h2>Registered Users</h2>

      <div className='user-container'>

        {/* <Users name='trupal' email='trupal@gmail.com' /> */}

        {
          users.map((user) =>(
            <Users name={user.name} email={user.email} />
          ))
        }
      </div>
    </>
  )
}

export default App
