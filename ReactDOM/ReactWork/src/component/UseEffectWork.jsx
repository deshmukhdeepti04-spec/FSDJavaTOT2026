import React, { useState, useEffect } from "react";

function UseEffectWork() {
  const [counter, setCounter] = useState(20);
  const [pointer, setPointer] = useState(100);
  const [data, setData] = useState([]);
  function IncrementValue() {
    // alert("Hii....");
    setCounter(counter + 2);
  }
  function pointerValue() {
    setPointer(pointer - 5);
  }
  useEffect(() => {
    // console.log("Hiii",counter)
    // console.log("Bye",pointer)

    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const response = await res.json();
    //   console.log(response);
      setData(response);
    }
    getData();
  }, []);
  //counter,pointer

  return (
    <div>
      UseEffectWork
      {/* {JSON.stringify(data)} */}
      Counter Value={counter}
      Pointer Value={pointer}
      {console.log(data)}
      
      {data.map((d)=>
        <h1>{d.title}</h1>
        
      )}
      <button onClick={IncrementValue}>Counter</button>
      <button onClick={pointerValue}>Pointer</button>

    </div>
  );
}

export default UseEffectWork;
