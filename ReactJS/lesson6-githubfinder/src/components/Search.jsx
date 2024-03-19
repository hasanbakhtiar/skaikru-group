import React from 'react'

const Search = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-6 my-5">
                    <form className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter username"  />
                        <button className="btn btn-dark" type="submit" >Search</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Search