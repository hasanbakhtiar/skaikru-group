import React from 'react'
import ProductForm from '../../components/ProductForm'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-5'>Add product</h1>
        <ProductForm onFormSubmit={fd=>{
          dispatch(addProduct(fd));
          swal("Product add successfull","","success");
            setTimeout(()=>{
                navigate('/dashboard')
            },1500)
        }} />
    </div>
  )
}

export default AddProduct