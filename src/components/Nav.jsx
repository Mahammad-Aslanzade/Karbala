import React from 'react';
import Logo from '../assets/logo.png';
import Blood_1 from "../assets/pngwing 2.png";
import Blood_2 from "../assets/pngwing 1.png";
import { MdLiveTv } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <div className="container">
                    <NavLink className="navbar-brand p-0" to="/">
                        <img src={Logo} alt="" style={{ height: "70px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <img src={Blood_1} className='mx-3' alt="" style={{ height: "70px" }} />

                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`} aria-current="page" to="/imamhussein">İmam Hüseyn </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ahlalbayt" className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`}>  Əhli Beyt  </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`} to="/karbala">   Kərbəla    </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`} to="/ashura">   Aşura  </NavLink>
                            </li>

                        </ul>
                        <img src={Blood_2} className='mx-3 me-4' alt="" id='blood_2-is' style={{ height: "70px" }} />
                        <div className='d-flex align-items-center live_box-is'> 
                                <MdLiveTv className=' fs-3' style={{color:"red"}} />
                                <NavLink to="#" className=  {` text-decoration-none mt-1 ms-2 ${({isActive}) => (isActive ? "active" : 'none')} `} id='live_link-is'>Kərbəla Canlı</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav