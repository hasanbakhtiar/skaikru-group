import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({alldata}) => {
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card">
                <img src={alldata.image} height={300} style={{objectFit:"contain"}} className="card-img-top" alt={alldata.title} />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title.slice(0,10)}...</h5>
                    <p className="card-text">{alldata.description.slice(0,30)}...</p>
                    <Link to={`/products/${alldata.id}`} className="btn btn-dark">More details</Link>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct