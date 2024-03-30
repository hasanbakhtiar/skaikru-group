import React from 'react'
import { useState } from 'react'
import { Bounce,  ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultUser = {
  email:"admin@test.com",
  password:"test123"
}


const App = () => {
  const notifysuccess = () => toast.success('Login is successfully', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });;
  const notifywrong = () => toast.error('Email or password is wrong', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });;
  const notifyalert = () => toast.warn('Please, fill input', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });;
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  const formHandle = e =>{
    e.preventDefault();
      if (!email && !pass) {
        notifyalert();
      }else{
        if (email === defaultUser.email || pass === defaultUser.password) {
          notifysuccess();
        }else{
          notifywrong();
        }
      }
  }
  return (
    <div>
      <h1 className='text-center my-5'>Login </h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-4">
          <form onSubmit={formHandle}>
            <div className="mb-3">
              <label  className="form-label">Email address</label>
              <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control"  />
            </div>
            <div className="mb-3">
              <label  className="form-label">Password</label>
              <input onChange={e=>setPass(e.target.value)} type="password" className="form-control"  />
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default App