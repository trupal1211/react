import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  let [counter , setCounter] = useState(0)
  let [visibility , setVisibility] = useState(false)

  function incHandler(){
    // counter = counter + 1
    // console.log(counter)

    setCounter(counter + 1)
    // setCounter('value is updated')
    setVisibility(true)


    // if(visibility == true)
    // {
    //   setVisibility(false)
    // }
    // else{
    //   setVisibility(true)
    // }


  }
  return (
    <>
      <div className='counter-container'>
        <h1>welcome to day 2 react JS</h1>
        <h1 className='counter'>{counter}</h1>
        <button className='btn' onClick={incHandler}>Increment ++</button>
        <div className={visibility == true ? 'box' : 'd-none'}></div>
      </div>
    </>
  );
}

export default App;
