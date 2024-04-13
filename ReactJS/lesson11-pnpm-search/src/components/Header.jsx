import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ApiContext } from '../context/ApiContext';
import slugify from 'slugify';
import { ModeContext } from '../context/ModeContext';

const Header = () => {
    const { totalItems } = useCart();
    const [keyword, setKeyword] = useState("");
    const [data] = useContext(ApiContext)
    const [mode,setMode] = useContext(ModeContext);
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

            <div className="container">
                <Link className="navbar-brand" to="/">Best shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                    </ul>
                    <div>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-light me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className=' btn btn-warning' onClick={()=>{mode==='light'?setMode('dark'):setMode('light')}}>{mode}</button>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Search products</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group mb-3">
                                            <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter product " aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                                        </div>

                                        <ul className="list-group">
                                            {!keyword ? "" : data.filter(p => p.title.toLocaleLowerCase().includes(keyword)).map(item => (
                                                <Link to={`/products/${slugify(item.title)}`} className="list-group-item d-flex justify-content-start">
                                                    <div data-bs-dismiss="modal">
                                                        <img height={70} style={{ objectFit: "contain" }} width={70} src={item.image} alt="img" /><span className='ms-3'>{item.title}</span></div></Link>
                                            ))}

                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/basket" className="btn btn-warning position-relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Header