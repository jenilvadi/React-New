
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Delete({data,setData}) {
const[id,setId] = useState('');
const navigate = useNavigate();
const handleDelete =() =>{

    const deleteData = data.filter((item)=>item.id != id)
    setData(deleteData)
    navigate('/')
}
  return (
    <>
    <center> <br /><br />
        <h1>Delete</h1>
        <input type="text" placeholder='Enter ID No' onChange={(e)=>setId(e.target.value)}/> <br />
        <button id='bt2'onClick={handleDelete} >DeleteData</button>
    </center>  
    </>
  )
}
