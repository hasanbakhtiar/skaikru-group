import React, { useEffect, useState } from 'react'
import supabase from '../config/connect'
import { useSelector } from 'react-redux'

const Home = () => {
    const text = useSelector(p=>p);
  return (
    <div>
        {text.map(item=>(
            <li key={item.id}>{item.text}</li>
        ))}
    </div>
  )
}

export default Home