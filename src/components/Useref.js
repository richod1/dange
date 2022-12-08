import React, { useRef,useState } from 'react'

function Useref() {
    const [name,setName]=useState('frimp');
    const input=useRef(null);

    const onClick=()=>{
        // console.log(input.current.value);
        setName(input.current.value);
    }
  return (
    <div>
        <h1>{name}</h1>
        <input placeholder='eg' ref={input}/>
        <button onClick={onClick}>Click</button>
    </div>
  )
}

export default Useref