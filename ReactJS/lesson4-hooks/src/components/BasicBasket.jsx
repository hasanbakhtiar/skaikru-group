import React, { useState } from 'react'

const BasicBasket = () => {
    const [count,setCount] = useState(0);
    const increment =()=>{
        setCount(count+1);
    }
  return (
    <div className='conatiner m-5'>
        <button className='btn btn-danger'>-</button>
        <span className='mx-3'>{count}</span>
        <button onClick={increment} className='btn btn-success'>+</button>
    </div>
  )
}

export default BasicBasket