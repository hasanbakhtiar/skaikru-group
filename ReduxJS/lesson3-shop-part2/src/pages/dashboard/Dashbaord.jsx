import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Dashbaord = () => {
    const data = useSelector(p => p)

    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Dashboard</h1>
                <div style={{width:"75%"}}>
                    <Link to="/dashboard/add" className='btn btn-success my-3'>Add</Link>
                </div>
                <Col sm={9}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Desc</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, count) => (
                                <tr>
                                    <th scope="row">{count+1}</th>
                                    <td><img src={item.photo} width={70} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.desc.slice(0,15)}...</td>
                                    <td><Button variant='warning'>Edit</Button></td>
                                    <td><Button variant='danger'>Delete</Button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </Col>
            </div>
            <h1 className=''></h1>

        </Container>

    )
}

export default Dashbaord