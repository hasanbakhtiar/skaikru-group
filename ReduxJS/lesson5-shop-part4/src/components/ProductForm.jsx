import React, { useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addProduct } from '../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({onFormSubmit,sendedit}) => {
    const [image,setImage] = useState(sendedit?sendedit.image:"");
    const [title,setTitle] = useState(sendedit?sendedit.title:"");
    const [price,setPrice] = useState(sendedit?sendedit.price:"");
    const [description,setDescription] = useState(sendedit?sendedit.description:"");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formSubmited = e => {
        e.preventDefault();
        if (!image || !title || !price || !description) {
                swal("Please fill input","","warning");
        }else{
            onFormSubmit({
                image,title,price,description
            })
            
        }

    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={5}>
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Photo link</label>
                        <input value={image} onChange={e=>setImage(e.target.value)}  type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input value={price} onChange={e=>setPrice(e.target.value)} type="text" className="form-control" />
                    </div>


                    <label className="form-label">Description</label>
                    <div className="form-floating mb-5">
                        <textarea value={description} onChange={e=>setDescription(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                    </div>




                    <button type="submit" className="btn btn-dark">Add</button>
                </form>
            </Col>
        </div>
    )
}

export default ProductForm