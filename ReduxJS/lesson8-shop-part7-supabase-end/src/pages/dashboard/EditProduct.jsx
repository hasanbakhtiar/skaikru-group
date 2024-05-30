import React from 'react'
import ProductForm from '../../components/ProductForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import slugify from 'slugify';
import { updateProductFromDatabase } from '../../tools/actions/shopAction';

const EditProduct = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(p => p);
  const editdata = data.find(p => slugify(p.title) === slug);
  return (
    <div>
      <h1 className='text-center my-5'>Edit products</h1>
      <ProductForm sendedit={editdata} onFormSubmit={fd=>{
          dispatch(updateProductFromDatabase(editdata.id,fd))
        }} />
    </div>
  )
}

export default EditProduct