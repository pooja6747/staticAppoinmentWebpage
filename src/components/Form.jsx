import React from 'react'


const Form = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 ">
                    <h5 className="text-start mt-2 pb-3 title font-16">Appoinment Booking</h5>
                    <form className='form-block p-4 rounded-5 mt-2'>
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-5 " placeholder="Enter Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-5 " placeholder="Choose Date & Time"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-5 " placeholder="Choose Problem"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-5 " placeholder="Choose Test"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-5 " placeholder="Choose Consultation"/>
                        </div>
                        <div className="row m-1">
                        <button type="submit" className="btn btn-lg bg-button rounded-5 font-16">Book Appoinment</button>
                        </div>
                       
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Form