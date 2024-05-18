import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const Register = () => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const agapassRef = useRef();
    const navigate = useNavigate();
    const formSubmit = (e) => {
        e.preventDefault();
        if (!nameRef.current.value || !phoneRef.current.value || !emailRef.current.value || !passRef.current.value || !agapassRef.current.value) {
            swal("Please fill input!", "", "warning");
        } else {
            if (passRef.current.value === agapassRef.current.value) {
                const user = [];
                user.push({
                    name: nameRef.current.value,
                    phone: phoneRef.current.value,
                    email: emailRef.current.value,
                    pass: passRef.current.value,
                });
                localStorage.setItem("users", JSON.stringify(user));
                localStorage.setItem("token",crypto.randomUUID());
                swal("Create new account", "After 2 seconds, the page will automatically redirect you.", "success");
                setTimeout(() => {
                    navigate('/login')
                }, 2000)

            } else {
                swal("Password is not correct !", "", "error");

            }
        }
    }
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5  text-dark '>Register</h1>
                <div className="col-6">
                    <form onSubmit={formSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Full name</label>
                            <input ref={nameRef} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone number</label>
                            <input ref={phoneRef} type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input ref={emailRef} type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input ref={passRef} type="password" autoComplete="off" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Again password</label>
                            <input ref={agapassRef} type="password" autoComplete="off" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-dark">Register</button>
                    </form>
                    <div className="d-flex flex-column justfiy-content-center align-items-center">
                        <Link to="/forgotpassword" className='btn btn-outline-dark mt-4'>Forgot password? </Link>
                        <Link to="/login" className='btn btn-outline-dark mt-4'>Already have an account? </Link>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Register