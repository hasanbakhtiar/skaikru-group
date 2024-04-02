import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import axios from 'axios';

const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => { 
        axios
        .get("https://fakestoreapi.com/products")
        .then(res=>setData(res.data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Product List</h1>
            <div className="row g-5">
                {data.map(item=><SingleProduct alldata={item} key={item.id}/>)}
                
                
            </div>
        </div>
    )
}

export default Products