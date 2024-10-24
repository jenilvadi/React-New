// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMoney } from '../Configure/BudgetSlice';
import { DepMoney } from '../Configure/ManageSlice';

export default function Money() {
    const dispatch = useDispatch();
    const moneyCre = useSelector((state) => {       
        return state.creKey
}
)
const moneyDep = useSelector((state) => {       
    return state.depKey
}
)
    const [cre,setCre] = useState('')
    const [deb,setDeb] = useState('')
    const [res,setRes] = useState('')
    const handleAdd = () =>{
        dispatch(addMoney(cre))
        setCre('')
        }
 const handleDeb = () =>{
    dispatch(DepMoney({id:Date.now(), deb , res}))
    setDeb('')
    setRes('')
 }
  return (
    <div>
        <br /><br />
        <h1>Money-Manager</h1> <br /><br />
        <div className="container">
            <div className="left">
                <center>
                    <br />
                    <h1>Credit Money</h1> <br /><br />
                <input type="text" className='b' placeholder='Enter Rs' value={cre} onChange={(e)=>setCre(e.target.value)}/><br/><br/> <br />
                <button id='bt1' className='a' onClick={handleAdd} >Add Deposite</button> <br /><br /><br />  
                    <h1>Available Balance :</h1> <br /><br />
                    {
                        moneyCre && 
                        <h1 style={{color:"green"}}>{moneyCre.amount}</h1>                            
                    }
                </center>
            </div>
            <div className="right">
            <center>
                <br />
                <h1>Debit Money</h1> <br /> <br />
            <input type="text" placeholder='Enter Rs' value={deb} onChange={(e)=>setDeb(e.target.value)} className='i1'/>
            <input type="text" placeholder='Enter Product Name' value={res} onChange={(e)=>setRes(e.target.value)} className='i1'/>
            <button id='bt2' onClick={handleDeb}>Debit Money</button> <br /><br />
            <table width={"90%"} border={2}>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th width="60%">Title</th>
                    <th width="15%">Amount</th>
                    </tr>
                </thead>
                <tbody>
                {
                moneyDep && 
                moneyDep.depmoney.map((e,i)=>{
                return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.res}</td>
                <td>{e.deb}</td>
                </tr>
        })
}
                </tbody>
            </table>
            </center>
            </div>
        </div>
    </div>
  )
}
