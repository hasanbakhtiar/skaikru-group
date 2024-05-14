import React from 'react'
import ProductForm from '../../components/ProductForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import slugify from 'slugify';
import { editProduct } from '../../tools/actions/shopAction';

const EditProduct = () => {
    const {slug} = useParams();
    const data = useSelector(p=>p);
    const editdata = data.find(p=>slugify(p.title) === slug);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-5'>Edit products</h1>
        <ProductForm sendedit={editdata} onFormSubmit={fd=>{
          dispatch(editProduct(editdata.id,fd));
          swal("Product update successfull","","success");
          setTimeout(()=>{
              navigate('/dashboard')
          },1500)
        }} />
    </div>
  )
}

export default EditProduct