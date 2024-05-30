import React from 'react'
import ProductForm from '../../components/ProductForm'
import { useDispatch } from 'react-redux'
import {addProductFromDatabase } from '../../tools/actions/shopAction';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-5'>Add product</h1>
        <ProductForm onFormSubmit={fd=>{
          dispatch(addProductFromDatabase(fd))
        }} />
    </div>
  )
}

export default AddProduct