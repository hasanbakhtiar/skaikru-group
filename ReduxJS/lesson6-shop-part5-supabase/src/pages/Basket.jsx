import React from 'react'
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';

const Basket = () => {
    const {
        isEmpty,
        items,
        emptyCart,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();
    return (
    <>
    {isEmpty? <div className='d-flex align-items-center justify-content-center'><img src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" /></div>:    <div className='container'>
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

                            {items.map(item => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img width={70} src={item.image} alt="err" /></td>
                                    <td>{item.title}</td>
                                    <td>{Math.round(item.price*item.quantity)}$</td>
                                    <td><button  onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-dark'>-</button><span className='mx-3'>{item.quantity}</span><button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button></td>
                                    <td><button onClick={()=>{removeItem(item.id);swal("Product Deleted!", "Product is removed!", "warning");}}  className='btn btn-danger'>X</button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    <h4>Total price: {Math.round(cartTotal)}$</h4>
                    <button onClick={()=>{emptyCart()}} className='btn btn-danger my-3'>All clear</button>
                </div>
            </div>
        </div>}</>
    )
}

export default Basket