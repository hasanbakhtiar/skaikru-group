import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Cart from './pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App