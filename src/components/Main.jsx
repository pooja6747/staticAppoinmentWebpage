import React from 'react';
import { RiSearch2Fill } from "react-icons/ri";

const Main = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-xs-12">
                    <div className="input-group  p-2 ">
                        <input type="text" className="form-control rounded-5" placeholder='search doctor'/>
                        <span className='icon'><RiSearch2Fill /></span>
                    </div></div>

            </div>
        </div>
    )
}

export default Main