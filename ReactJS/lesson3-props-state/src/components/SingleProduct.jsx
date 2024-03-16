import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'

export class SingleProduct extends Component {
    render() {
        return (

            <div className='col-12 col-sm-6 col-md-4'>
                <div className="card" >
                    <img height={300} style={{ objectFit: "contain" }} src={this.props.photo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">${this.props.price}</p>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#"  className={`btn  ${this.props.stock<1?"btn-danger disabled":"btn-success"}`}>{this.props.stock<1?"Stock out":"Add to cart"}</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default SingleProduct