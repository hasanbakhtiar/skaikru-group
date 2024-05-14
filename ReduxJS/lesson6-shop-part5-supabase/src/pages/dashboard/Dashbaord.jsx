import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../tools/actions/shopAction'
import slugify from 'slugify'
import { supabase } from '../../supabase/supabaseClient'
import swal from 'sweetalert'

const Dashbaord = () => {
    const data = useSelector(p => p)
    const dispatch = useDispatch();
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
                                    <td><img src={item.image} width={70} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description.slice(0,15)}...</td>
                                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>Edit</Link></td>
                                    <td><Button variant='danger' onClick={async()=>{
                                        const {data,error} = await supabase.from('products').delete().eq('id',item.id);
                                        if (error) {
                                            console.log(error);
                                        }else{
                                            swal('product was deleted!',"","success");
                                            setTimeout(()=>{
                                                window.location.assign('/dashboard')
                                            },1500)
                                        }
                                    }}>Delete</Button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </Col>
            </div>

        </Container>

    )
}

export default Dashbaord