import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Tut4() {
    const [data ,setData]=useState("");


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].body)
            // console.log(response.data);
        })

    })
  return (
    <div> {data}</div>
  )
}

export default Tut4