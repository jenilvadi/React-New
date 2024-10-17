// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, UpdateData } from '../Configure/TaskSlice';
export default function TaskRedux() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[gender,setGender]=useState('')
    const[task,setTask]=useState('')
    const[prio,setPrio]=useState('')
    const[index,setIndex]=useState(null)
    const count1 = useSelector((state)=>{
        return state.taskKey
    });
    const dispatch = useDispatch();

    const handleAdd = () =>{
        if(index==null){
            dispatch(AddData({id:Date.now(),name,email,gender,task,prio}))
        }else{
            dispatch(UpdateData({id:index,name,email,gender,task,prio}))
            setIndex(null)
        }
        setName('')
        setEmail('')
        setGender('')
        setTask('')
        setPrio('')
    }
    const HandleDelete = (id) => {
        dispatch(DeleteData(id));
    }
    const HandleEdit = (id) => {
    let singleData = count1.Taskmanager.find((item) => item.id == id)
    setIndex(id)
    setName(singleData.name)
    setEmail(singleData.email)
    setGender(singleData.gender)
    setTask(singleData.task)
    setPrio(singleData.prio)
    }
    const handleGender = (value) =>{
        setGender(value)
    }
    return (
    <>
      <center>
        <p id='h1'>Taskmanager-Redux</p>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name} /> <br /><br />
        <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} /> <br /><br />
       <input type="radio" checked={gender === "Male" ? true:false} style={{width:"28px",marginLeft:"100px"}} name='Gender' value= "male" onClick={()=>handleGender("Male")} /> <label htmlFor="">Male</label>
       <input type="radio" checked={gender === "Female" ? true:false}  style={{width:"28px"}} name='Gender' value= "female" onClick={()=>handleGender("Female")} /> <label htmlFor="">Female</label> <br /><br />
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} value={task} /> <br /><br />
        <select onChange={(e)=>setPrio(e.target.value)}>
            <option value="">--Set Priority--</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
        </select> <br /><br />
        <button id='bt1' onClick={handleAdd} >{ index ?"Update Task":"Add Task"}</button> <br /><br />
        <table border={2} width={"86%"}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Task</th>
                <th>Priority</th>
                <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    count1?
                    count1.Taskmanager.map((e,i)=>{
                        return (<tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                            <td>{e.task}</td>
                            <td>{e.prio}</td>
                            <td>
                            <button id='bt2' onClick={()=>HandleDelete(e.id)}>Delete</button>
                            <button id='bt3' onClick={()=>HandleEdit(e.id)}>Edit</button>
                            </td>
                        </tr>)
                    }) : " "
                }
            </tbody>
        </table>
      </center>
    </>
  )
}
