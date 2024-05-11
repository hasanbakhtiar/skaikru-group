import React from 'react'
import ProductForm from '../../components/ProductForm'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import slugify from 'slugify';

const EditProduct = () => {
    const {slug} = useParams();
    const data = useSelector(p=>p);
    const editdata = data.find(p=>slugify(p.title) === slug);
    console.log(editdata);
  return (
    <div>
        <h1 className='text-center my-5'>Edit products</h1>
        <ProductForm sendedit={editdata} />
    </div>
  )
}

export default EditProduct