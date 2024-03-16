import React, { Component } from 'react'
import ProductList from './components/ProductList'
import BasicBasket from './components/BasicBasket'

export class App extends Component {
  render() {
    return (
      <div>
        <BasicBasket />
      </div>
    )
  }
}

export default App