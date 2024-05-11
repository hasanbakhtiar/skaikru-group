import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from '../components/SingleProduct';
import { Container } from 'react-bootstrap';

const ProductOutlet = () => {
    const data = useSelector(p=>p);
  return (
    <Container>
        <h1 className='text-center my-5'>Outlet products</h1>
        {data.map(item=>(
            <SingleProduct alldata={item} outlet={true} key={item.id}/>
        ))}

    </Container>
  )
}

export default ProductOutlet