import React, { useState } from 'react'
import {auth} from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [email, setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate = useNavigate("")

    const handleSignup=async ()=>{
        let user =await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
        if(user){
            navigate("/dashbord")
        }
    }
  return (
    <div>
        <h1>Sign In</h1>
        <input type="text" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter your Password' onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleSignup}>Sign up</button>
        <Link to={"/sigin"}>Sign in</Link>
    </div>
  )
}
