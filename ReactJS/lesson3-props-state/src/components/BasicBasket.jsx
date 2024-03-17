import React, { Component } from 'react'

 class BasicBasket extends Component {
    constructor(){
        super();
        // this.decrement = this.decrement.bind(this);
        this.state = {
            productdata:{
                title:"Xiaomi 14 Ultra",
                price:1800,
                photo:"https://specifications-pro.com/wp-content/uploads/2023/04/Xiaomi-14-Ultra-600x600.png",
                stock:10,

            },
            count:1
        }
    }
    
     decrement =()=>{
        if (this.state.count>1) {
            this.setState({
            
                count: this.state.count - 1
            })
        }
    }
  render() {
    return (
      <div className='container my-5'>
        {this.state.count === this.state.productdata.stock?<div className="alert alert-danger w-50">stock out</div>:""}
        <div className="d-flex align-items-center">
        <img width={170} src={this.state.productdata.photo} alt="" />
        <div>
        <h3>{this.state.productdata.title}</h3>
        <p>${this.state.productdata.price * this.state.count}</p>
        </div>

        <div className='mx-4'>
        <button onClick={this.decrement} className='btn btn-danger'>-</button>
        <span className='mx-3'>{this.state.count}</span>
        <button className='btn btn-success' onClick={()=>{
        if (this.state.count<this.state.productdata.stock) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }}>+</button>
        </div>
        </div>
        
      </div>
    )
  }
}

export default BasicBasket