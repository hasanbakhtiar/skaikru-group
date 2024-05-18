import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from '../components/SingleProduct';
import { Container, Row } from 'react-bootstrap';

const ProductOutlet = () => {
    const data = useSelector(p=>p);
  return (
    <Container>
        <h1 className='text-center my-5'>Outlet products</h1>
      <Row>
      {data.length == 0 ? <p className='alert alert-warning text-center'>No product</p> : data.map(item=>(
            <SingleProduct alldata={item} outlet={true} key={item.id}/>
        ))}
      </Row>

    </Container>
  )
}

export default ProductOutlet