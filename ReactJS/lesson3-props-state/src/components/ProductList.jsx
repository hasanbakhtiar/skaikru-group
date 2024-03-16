import React, { Component } from 'react'
import SingleProduct from './SingleProduct'
import products from '../data/product';
export class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='my-5 text-center'>Product List</h1>
        <div className="row g-5">
          {products.map(item=>(
             <SingleProduct
             title={item.name}
             price={item.price}
             photo={item.photo}
             desc={item.description}
             stock={item.stock}
             />
          ))}
          
        

        </div>
      </div>
    )
  }
}

export default ProductList