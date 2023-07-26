import React from 'react';
import Logo from '../assets/logo.png';
import Blood_1 from "../assets/pngwing 2.png";
import Blood_2 from "../assets/pngwing 1.png";
import { MdLiveTv } from 'react-icons/md';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <div className="container">
                    <a className="navbar-brand p-0" href="#">
                        <img src={Logo} alt="" style={{ height: "70px" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <img src={Blood_1} className='mx-3' alt="" style={{ height: "70px" }} />

                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active page_title-is " aria-current="page" href="#">İmam Hüseyn </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  page_title-is" href="#">  Əhli Beyt  </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page_title-is" href="#">   Kərbəla    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page_title-is" href="#">   Aşura  </a>
                            </li>

                        </ul>
                        <img src={Blood_2} className='mx-3 me-4' alt="" id='blood_2-is' style={{ height: "70px" }} />
                        <div className='d-flex align-items-center live_box-is'> 
                                <MdLiveTv className=' fs-3' style={{color:"red"}} />
                                <a href="#" className=' text-decoration-none mt-1 ms-2' id='live_link-is'>Kərbəla Canlı</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav