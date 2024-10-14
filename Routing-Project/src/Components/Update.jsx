
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update({data,setData}) {
    const [id,setId] = useState ('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [num,setNum] = useState('');
    const navigate = useNavigate();
    const handleEdit = () => {
       
        const oldData = data.find((item)=>item.id == id)
        setName(oldData.name)
        setEmail(oldData.email)
        setNum(oldData.num)
    }
    const handleUpdate = () =>{
        
        const updatedData = data.map((item)=>
            item.id == Number(id) ? {...item , name:name , email:email , num:num  } : item
        );
        setData(updatedData);
        navigate('/');
    }
  return (
    <>
    <center><br /><br />
        <h1>Update</h1>
        <input type="text" placeholder='Enter ID No' onChange={(e)=>setId(e.target.value)} /> <br />
        <button id="bt1" onClick={handleEdit}>Find Data</button> <br />
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br />
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
        <input type="tel" placeholder='Enter Mobile No' minLength="10"  maxLength="10" pattern="[0-9]{10}" value={num} onChange={(e)=>setNum(e.target.value)}/> <br />
        <button id="bt3" onClick={handleUpdate}>Update Data</button> <br /><br />
    </center>
    </>
  )
}
