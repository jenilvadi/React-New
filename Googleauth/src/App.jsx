// eslint-disable-next-line no-unused-vars
import React from 'react'
import Signin from './Sginin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Deshbord'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}