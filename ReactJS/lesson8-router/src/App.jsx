import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'


const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products/:id" element={<ProductDetails/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App