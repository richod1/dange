import axios from 'axios';
import React,{useEffect, useState} from 'react'

function Usememo() {
const [data,setData]=useState();

useEffect(()=>{
    axios 
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        setData(response.data)
    })
},[])

const Findlongestname=(comments)=>{
if(!comments) return null;

let longestName="";
for(let i=0;i<comments.lenght;i++){
    let currentName=comments[i].name;
    if(currentName.length > longestName.length){
        currentName=longestName;
    }
    

}
console.log("this was computed");
return longestName;
};

  return (


    <div>{Findlongestname (data)}</div>
  )
}

export default Usememo