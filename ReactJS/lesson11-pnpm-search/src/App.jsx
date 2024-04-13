import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Basket from './pages/Basket'
import { useContext } from 'react'
import { ModeContext } from './context/ModeContext'


const Main = () => {
  const [mode] = useContext(ModeContext);

  return (

    <div className={mode}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:slug" element={<ProductDetails />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </div>

  )
}

const App = () => {

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>

  )
}

export default App