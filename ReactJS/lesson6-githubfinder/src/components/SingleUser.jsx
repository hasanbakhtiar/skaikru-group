import React from 'react'

const SingleUser = ({alldata}) => {
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card">
                <img src={alldata.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.login}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={alldata.html_url} target='_blank' className="btn btn-dark">Go profile</a>
                </div>
            </div>

        </div>
    )
}

export default SingleUser