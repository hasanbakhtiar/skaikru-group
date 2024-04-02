import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => { 
        axios
        .get("https://fakestoreapi.com/products")
        .then(res=>setData(res.data))
    }, [])
    const productDetails = data.find(p=>p.id == id);
    console.log(productDetails);
  return (
<>
{productDetails===undefined?<h1>Loading...</h1>:<div className="container col-xxl-8 px-4 py-5">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img src={productDetails.image}  className="d-block mx-lg-auto img-fluid" alt={productDetails.title} width={500} height={500} loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.title}</h1>
    <p className="lead">{productDetails.description}</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to="/products" className="btn btn-dark btn-lg px-4">Back</Link>
    </div>
  </div>
</div>
</div>}
</>

  )
}

export default ProductDetails