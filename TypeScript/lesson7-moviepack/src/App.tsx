import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import CharacterAdd from './pages/dashboard/character/Add'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>

            <Route path='/dashboard/character/add' element={<CharacterAdd />}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App