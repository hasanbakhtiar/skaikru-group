import React, { useContext, } from 'react'
import SingleProduct from '../components/SingleProduct'

import { ApiContext } from '../context/ApiContext';

const Products = () => {
    const [data] = useContext(ApiContext);
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