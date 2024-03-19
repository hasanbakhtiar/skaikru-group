import React from 'react'
import phonesImg from "../img/smartphones.jpg";
const SingleCard = ({title,price}) => {
    return (
        <div className="col-12 col-sm-12 col-md-4">
            <div className="card" >
            <img src={phonesImg} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default SingleCard