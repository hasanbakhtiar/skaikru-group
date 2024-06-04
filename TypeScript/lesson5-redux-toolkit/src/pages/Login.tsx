import React, { useState } from 'react'
import swal from 'sweetalert';
import supabase from '../supabase/config';

const Login:React.FC = () => {
    const [email,setEmail] = useState<string>("");
    const [pass,setPass] = useState<string>("");

    const checkLogin = async(e:React.FormEvent)=>{
        e.preventDefault();
            if (!email || !pass) {
                swal("Please fill inputs","","warning");
            }else{
                const { data,error } = await supabase.from('users').select()
                if (data[0].email ===  email && data[0].password ===pass) {
                 window.location.assign('/todo');
                    
                }else{
                    swal("Email or password is wrong!","","error");
                }
            }
    }
  return (
        <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Login</h1>
            <div className="col-5">
            <form onSubmit={checkLogin}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input onChange={e=>setPass(e.target.value)} type="password" className="form-control"  />
            </div>
            
            <button type="submit" className="btn btn-dark">Login</button>
            </form>
            </div>
        </div>

  )
}

export default Login