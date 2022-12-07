import React,{useState} from 'react'

function Tut3() {
    const [num ,setNum]=useState(0);
    const [text,setText]=useState(true);
  return (
    <div>
        <h1>{num}</h1>
       <button onClick={()=>{
        setNum(num+1)
        setText(!text)
       }}> Click here</button>
       {text && <p>hello print sucess</p>}
    </div>
  )
}

export default Tut3