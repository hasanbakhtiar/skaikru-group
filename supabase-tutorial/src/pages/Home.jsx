import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { FaBasketShopping } from "react-icons/fa6";


const Home = () => {
  const text = useSelector(p => p);
  const {addItem}=useCart();
  const {addWishlistItem} = useWishlist();
  const navigate = useNavigate();
  return (
    <div className='container mt-5'>
      <h1 className='text-center my-5'>Product List </h1>
      <div className="row g-5">
      {text.map(item => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{item.text}</h5>
              <p className="card-text">${item.price}</p>
              <button className="btn btn-dark" onClick={()=>{addItem(item);
                navigate('/cart')
              }}><FaBasketShopping className='mb-1 me-1' />
Add to cart</button>
              <button className="btn btn-warning ms-3" onClick={()=>{addWishlistItem(item);
              }}>Add to wishlist</button>
              
            </div>
          </div>
        </div>

      ))}

        
      </div>
    </div>
  )
}

export default Home