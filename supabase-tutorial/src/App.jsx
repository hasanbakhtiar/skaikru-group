import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App