import React from 'react'

const Basket = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Basket Page</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><img src="" alt="err" /></td>
                                <td>Otto</td>
                                <td>300$</td>
                                <td><button className='btn btn-dark'>-</button><span className='mx-3'>0</span><button className='btn btn-dark'>+</button></td>
                                <td><button className='btn btn-danger'>X</button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <h4>Total price: 1000$</h4>
                </div>
            </div>
        </div>
    )
}

export default Basket