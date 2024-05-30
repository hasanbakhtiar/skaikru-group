import React, { useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import swal from 'sweetalert';

const ProductForm = ({onFormSubmit,sendedit}) => {
    const [img,setImg] = useState(sendedit?sendedit.img:"");
    const [title,setTitle] = useState(sendedit?sendedit.title:"");
    const [price,setPrice] = useState(sendedit?sendedit.price:"");
    const [category,setCategory] = useState(sendedit?sendedit.category:"");
    const [desc,setDesc] = useState(sendedit?sendedit.desc:"");

    const formSubmited = e => {
        e.preventDefault();
        if (!img || !title || !price || !desc) {
                swal("Please fill input","","warning");
        }else{
            onFormSubmit({
                img,title,price,desc,category
            })
            
        }

    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={5}>
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Photo link</label>
                        <input value={img} onChange={e=>setImg(e.target.value)}  type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input value={price} onChange={e=>setPrice(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input value={category} onChange={e=>setCategory(e.target.value)} type="text" className="form-control" />
                    </div>


                    <label className="form-label">desc</label>
                    <div className="form-floating mb-5">
                        <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                    </div>




                    <button type="submit" className="btn btn-dark">Add</button>
                </form>
            </Col>
        </div>
    )
}

export default ProductForm