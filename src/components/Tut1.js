import React,{useState} from 'react'

function Tut1() {
    const [conter,setConter]=useState((0));
const Increaments=()=>{
    setConter(conter +1);
}

  return (
    <div>
        {conter}
        <button onClick={Increaments}>Increaments</button>
    </div>
  )
}

export default Tut1
//doing useState