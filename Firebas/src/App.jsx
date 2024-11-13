// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebsedaty1/SignUp'
import Dashboard from './Firebsedaty1/Dashbord'
import Signin from './Firebsedaty1/Signin'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
