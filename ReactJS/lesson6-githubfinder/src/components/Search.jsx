import React, { useState } from 'react'

const Search = ({comingKeyword,sendStatus}) => {
    const [keyword,setKeyword] = useState("");
    const [status] = useState('no user');
    const formSubmited = e =>{
        e.preventDefault();
        if (!keyword) {
            alert('please, enter username');
        }else{
            comingKeyword(keyword);
            sendStatus(status);
        }
        
    }
    
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-6 my-5">
                    <form onSubmit={formSubmited} className="input-group mb-3">
                        <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter username"  />
                        <button className="btn btn-dark" type="submit" >Search</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Search