import React from 'react'
import { useState } from 'react'
function StateHandlingHook() {
    const[count,setCount]=useState(20);

     function doIncrement(){
    //  alert("Hiii....");
     setCount(count+20);
     }
function doDecrement(){
  setCount(count-2);
}
     
  return (
    <div>
        <h2>StateHandlingHook</h2>
        <h2>Count={count}</h2>
         <button onClick={doIncrement}>Increment</button>
         <button onClick={doDecrement}>Decrement</button>
    </div>
  )
}


export default StateHandlingHook