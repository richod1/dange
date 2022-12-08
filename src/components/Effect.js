import axios from 'axios';
import React,{useState,useEffect} from 'react'

function Effect() {
    const [value,setValue]=useState();

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            // console.log(response.data);
            setValue(response.data[0].name);
        })
    },[])
  return (
    <div>
   api is here:      {value}
    </div>
  )
}

export default Effect