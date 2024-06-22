import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {items} = useCart();
  return (
    <div>
        {items.map(item=>(
            <li>{item.text}</li>
        ))}
    </div>
  )
}

export default Cart