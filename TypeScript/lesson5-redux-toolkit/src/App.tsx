import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/todo' element={<Home />}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App