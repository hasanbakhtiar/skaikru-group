import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const Products = () => {
  const data = useSelector(p=>p);
  return (
    <Container>
      <h1 className='text-center my-5'>Products list</h1>
      <Row className='g-5'>
        {data.map(i=>(

        <SingleCard alldata={i} key={i.id}/>
        ))}
      </Row>
    </Container>
  )
}

export default Products