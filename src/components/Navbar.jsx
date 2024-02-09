import React from 'react';
import logo from '../assets/images/logo.png'
import { RiSettingsFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav class="px-2 py-3 mb-2">
            <div class="container-fluid d-flex flex-row justify-content-between ">
                <div className="title d-flex flex-row flex-wrap">
                    <div className="img-div d-flex align-items-center justify-content-center  mx-2">
                        <img src={logo} alt="Logo" width="30" height="30" className="rounded-circle" />
                    </div>
                    <div className="block d-flex flex-column">
                        <span className='subTitle'>welcome</span>
                        <span className='font-16 fw-bold'>Misty Simon</span>
                    </div>

                </div>
                <div className="icon ">
                <RiSettingsFill />
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar