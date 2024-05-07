import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addProduct } from '../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formSubmited = e => {
        e.preventDefault();
        if (!imgRef.current.value || !titleRef.current.value || !priceRef.current.value || !descRef.current.value) {
                swal("Please fill input","","warning");
        }else{
            dispatch(addProduct({
                photo:imgRef.current.value,
                title:titleRef.current.value,
                price:priceRef.current.value,
                desc:descRef.current.value
            }))
            swal("Product add successfull","","success");
            setTimeout(()=>{
                navigate('/dashboard')
            },1500)
        }

    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={5}>
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Photo link</label>
                        <input ref={imgRef} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input ref={titleRef} type="text" className="form-control" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input ref={priceRef} type="text" className="form-control" />
                    </div>


                    <label className="form-label">Description</label>
                    <div className="form-floating mb-5">
                        <textarea ref={descRef} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                    </div>




                    <button type="submit" className="btn btn-dark">Add</button>
                </form>
            </Col>
        </div>
    )
}

export default ProductForm