import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5  text-dark '>Login</h1>
                <div className="col-6">
                    <form >
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="my-5">
                            <label  className="form-label">Password</label>
                            <input type="password" autoComplete="off" className="form-control"/>
                        </div>
                    
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                        <div className="d-flex flex-column justfiy-content-center align-items-center">
                        <Link to="/forgotpassword" className='btn btn-outline-dark mt-4'>Forgot password? </Link>
                        <Link to="/register" className='btn btn-outline-dark mt-4'>Create new account </Link>
                        </div>
                </div>

            </div>



        </div>
    )
}

export default Login