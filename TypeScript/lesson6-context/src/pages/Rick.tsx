import React, { useContext } from 'react'
import { RickContext } from '../context/RickContext';

const Rick = () => {
    const [character] = useContext(RickContext);
  return (
    <div className='container mt-5'>
        {character.map((item:any)=>(
            <p key={item.id}><img src={item.image} alt="" />{item.name}</p>
        ))}
    </div>
  )
}

export default Rick