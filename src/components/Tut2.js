import React,{useState} from 'react'

function Tut2() {
const [name, setName]=useState('degraft');
const onChange=(e)=>{
    const newValue=e.target.value;
    setName(newValue);
}
  return (
    <div>
        <input placeholder='your name 'onChange={onChange} />{name}
    </div>
  )
}

export default Tut2