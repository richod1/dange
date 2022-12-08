import React,{useState} from 'react'

function Button(props) {
    const [toggle,setToggle]=useState(false);
    
  return (
    <div>
        <button onClick={()=>{
            setToggle(!toggle);
        }}> From child
        </button>
        {toggle && <span>toggle</span>}
       
    </div>
  )
}

export default Button