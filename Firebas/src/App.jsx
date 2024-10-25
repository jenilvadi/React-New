import React from 'react'
import SignUp from './Firebsedaty1/SignUp'
import Signin from './Firebsedaty1/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from './Firebsedaty1/Dashbord'

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' Component={SignUp}></Route>
        <Route path='/sigin' Component={Signin}></Route>
        <Route path='/dashbord' Component={Dashbord}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
