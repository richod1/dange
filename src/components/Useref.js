import React, { useRef,useState } from 'react'

function Useref() {
    const [name,setName]=useState('');
    const input=useRef(null);

    const onClick=()=>{
        // console.log(input.current.value);
        setName(input.current.value);
        // const result=input.current.value="";
        // setName(result);
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