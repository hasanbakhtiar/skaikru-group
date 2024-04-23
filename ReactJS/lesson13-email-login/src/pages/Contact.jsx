import React from 'react'
import { useRef } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2ocx5bc', 'template_djhmafn', form.current, {
          publicKey: 'cVBf7nQwR9JgBlZoL',
        })
        .then(
          () => {
            swal("Message sended", "", "success");
            console.log('success');

          },
          (error) => {
            swal("Something is wronf","", "error");

          },
        );
    };
    
    return (
        <div>

            <h1 className='text-center my-5'>Contact</h1>
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="col-6">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Surname</label>
                            <input type="text" name='surname' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input type="tel" name='phone' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" name='email' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <div className="form-floating">
                                <textarea name='message' className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                            </div>

                        </div>

                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact