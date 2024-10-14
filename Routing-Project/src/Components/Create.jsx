
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({data,setData}) {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[num,setNum] = useState('')
    const navigate = useNavigate();
    const handleAdd = () => {
       
        let obj = {id:data.length+1, name:name , email:email , num: num};
        setData([...data,obj])
        navigate('/')
    }
  return (
    <>
    <center> 
    <br /><br />
    <h1>Create</h1>
    <br />
    <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br />
    <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /><br />
    <input type="tel" placeholder='Enter Mobile-No' minLength="10"   maxLength="10" pattern="[0-9]{10}" onChange={(e)=>setNum(e.target.value)}/> <br/>
    <button id='bt1' onClick={handleAdd}>Add Data</button>
    </center>  
    </>
  )
}
