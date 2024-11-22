    // eslint-disable-next-line no-unused-vars
    import React from 'react'
    import { signInWithPopup } from 'firebase/auth'
    import { auth, provider } from '../firebaseconfing'
    import { useNavigate } from 'react-router-dom'
    
    
    export default function Login() {
        const navigate = useNavigate();
        const handleLogin = async () => {
                const result = await signInWithPopup(auth, provider).then((data)=>{
                    console.log(data);
                    const name = data.user.displayName;
                    navigate('/Dashboard',{state:{name:name}})
                })
                console.log(result);
        }
        return (
            <>
            <center>
            <br /> <br /> <br /><br />
            <div className='box1'> <br /><br />
                <h1>GoogleAuth</h1> <br /><br />
                <input type="email" placeholder='Enter Email' /> <br /><br />
                <input type="password" placeholder='Enter Password' /> <br /><br /><br />
                <button className='bt1'>LogIn</button> <br />
                <span><hr/> or <hr /></span> <br />
                <button onClick={handleLogin}>
                    <img src='/7123025_logo_google_g_icon.svg' alt='Google logo' style={{height:"40px"}} />
                    Sign in with Google
                </button> <br /><br /><br />
            </div>
            </center>
            </>
        )
    }