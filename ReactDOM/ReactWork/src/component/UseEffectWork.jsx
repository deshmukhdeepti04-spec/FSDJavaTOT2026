import React ,{useState,useEffect}from 'react'

function UseEffectWork() {
const[counter,setCounter]=useState(20);
const[pointer,setPointer]=useState(100);
const [data,setData]=useState();
function IncrementValue(){
    // alert("Hii....");
    setCounter(counter+2);
}
function pointerValue(){
    setPointer(pointer-5);
}
useEffect(()=>{
    // console.log("Hiii",counter)
    // console.log("Bye",pointer)
    
    async function getData(){
        const res= await fetch('GET https://fakestoreapi.com/products');
        const response=await res.json();
        setData(response);

    }
    getData();
},[])   //counter,pointer

  return (
    <div>UseEffectWork
        Counter Value={counter}
        Pointer Value={pointer}
<button onClick={IncrementValue}>Counter</button>
<button onClick={pointerValue}>Pointer</button>

    </div>
  )
}

export default UseEffectWork