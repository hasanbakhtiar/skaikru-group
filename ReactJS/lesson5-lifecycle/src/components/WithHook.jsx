import React, { useEffect, useState } from 'react'

const WithHook = () => {
    const [data,setData] = useState('my value');
    const [value,setValue] = useState('item ');
    useEffect(()=>{
        console.log('start');
    },[data,value])
  return (
    <div className='container m-5'>
        <h1>{data}</h1>
        <h1>{value}</h1>
        
        <button onClick={()=>{setData('new value');}} className='btn btn-primary me-3'>change1</button>
        <button onClick={()=>{setValue('new item');}} className='btn btn-primary'>change2</button>
    </div>
  )
}

export default WithHook