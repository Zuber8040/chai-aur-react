import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter,setCounter] = useState(0);

    const addValue = ()=>{
       if(counter<20 && counter>=0){
        setCounter(counter+1)
       }
    }
    const removeValue = ()=>{
      if(counter>0)
      setCounter(counter-1)

    }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter} </h2>      


      {/* here i am used reference bcoz on click it should get execute only  */}
      <button onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value </button>
      

    </>
  )
}

export default App
