import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rick from './pages/Rick'

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/rickandmorthy' element={<Rick />}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App