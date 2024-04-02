import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<>
<div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold text-body-emphasis">WELCOME TO BEST SHOP</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">At Best shop, we're more than just a store. We're a community of individuals passionate about. From our humble beginnings to where we are now, our journey has been fueled by our dedication to providing exceptional products and outstanding service to our customers.</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/products" className="btn btn-dark btn-lg ">Shop now</Link>
    </div>
  </div>
</div>
</>

  )
}

export default Home