import React, { Component } from 'react'
import SingleCard from './SingleCard'

export class ProductTest extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='my-5 text-center'>Product List</h1>
        <div className="row g-5">
        <SingleCard title="React JS"
         photo="https://code-fin-nua.com/wp-content/uploads/2020/06/react_logo_1200x640.png"
         styl='colorfull'
          />
        <SingleCard title="Redux JS"
         photo="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png" />
        <SingleCard title="Solid JS" photo="https://raw.githubusercontent.com/solidui/solid/main/assets/logo.png" />
        <SingleCard title="Astro JS" photo="https://cdn.hashnode.com/res/hashnode/image/upload/v1677197124486/86fa95f6-e896-4c96-b180-7f9dc1b8e71d.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
        <SingleCard styl='colorfull' title="Qwik JS"  photo="https://repository-images.githubusercontent.com/368917877/cfcc0a17-1843-4713-942b-a122ffc2d72a"/>
        </div>
      </div>
    )
  }
}

export default ProductTest