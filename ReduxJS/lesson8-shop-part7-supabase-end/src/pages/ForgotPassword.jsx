import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5  text-dark '>ForgotPassword</h1>
                <div className="col-6">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                    

                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>
                    <div className="d-flex flex-column justfiy-content-center align-items-center">
                        <Link to="/register" className='btn btn-outline-dark mt-4'>Create new account </Link>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default ForgotPassword