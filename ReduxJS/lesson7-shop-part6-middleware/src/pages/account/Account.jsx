import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const auth = JSON.parse(localStorage.getItem("users"));

  return (
    <div className='container'>
    <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5  text-dark '>Account</h1>
        <div className="col-6">
            <form >

                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input ref={nameRef} value={auth[0].name} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone number</label>
                    <input ref={phoneRef} type="tel" value={auth[0].phone} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={emailRef} type="email" value={auth[0].email} className="form-control" />
                </div>
                

                <button type="submit" className="btn btn-warning">Change</button>
            </form>
            <div className="d-flex flex-column justfiy-content-center align-items-center">
                <Link to="/changepassword" className='btn btn-outline-dark mt-4'>Change password </Link>
                <button onClick={()=>{
                    localStorage.removeItem('superuser');
                    localStorage.removeItem('token');swal("Log out!", "After 2 seconds, the page will automatically redirect you.", "warning");
                setTimeout(() => {
                    window.location.assign('/')
                }, 2000)}} className='btn btn-outline-danger mt-4'>Log out </button>
            </div>
        </div>

    </div>



</div>
  )
}

export default Account