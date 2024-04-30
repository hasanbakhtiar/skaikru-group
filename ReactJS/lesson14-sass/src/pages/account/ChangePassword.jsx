import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom';

const ChangePassword = () => {
    const currentRef = useRef();
    const passRef = useRef();
    const againRef = useRef();
  return (
    <div className='container'>
    <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5  text-dark '>Change Password</h1>
        <div className="col-6">
            <form >

                <div className="mb-3 " style={{borderBottom:"1px solid #000",paddingBottom:"40px"}}>
                    <label className="form-label">Current password</label>
                    <input ref={currentRef}  type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">New password</label>
                    <input ref={passRef} type="tel"  className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Again password</label>
                    <input ref={againRef} type="email"  className="form-control" />
                </div>
                

                <button type="submit" className="btn btn-warning">Change</button>
            </form>
            <div className="d-flex flex-column justfiy-content-center align-items-center">
                <Link to="/account" className='btn btn-outline-dark mt-4'>Change information </Link>
            </div>
        </div>

    </div>



</div>
  )
}

export default ChangePassword