import React from 'react'

const Contact = () => {
    return (
        <div>

            <h1 className='text-center my-5'>Contact</h1>
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Surname</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
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