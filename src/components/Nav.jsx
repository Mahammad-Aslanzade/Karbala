import React from 'react';
import Logo from '../assets/logo.png';
import Blood_1 from "../assets/pngwing 2.png";
import Blood_2 from "../assets/pngwing 1.png";
import { MdLiveTv } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import {Helmet} from "react-helmet";

const Nav = () => {
    const [click,setClick] = useState()
    const {t, i18n} = useTranslation();
    const handleClick = (lang)=>{
      i18n.changeLanguage(lang);
    }
    return (
      <>
        <Helmet>
                <title> {t('nav.10')}</title>
            </Helmet>
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
                                <NavLink className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`} aria-current="page" to="/imamhussein">{t('nav.0')} </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ahlalbayt" className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`}>  {t('nav.1')}  </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`} to="/karbala">   {t('nav.2')}    </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link page_title-is ${({isActive}) => (isActive ? "active" : 'none')}`} to="/ashura">   {t('nav.3')}  </NavLink>
                            </li>

                        </ul>
                        <img src={Blood_2} className='mx-3 me-4' alt="" id='blood_2-is' style={{ height: "70px" }} />
                        <div className='d-flex align-items-center live_box-is'> 
                                <MdLiveTv className=' fs-3' style={{color:"red"}} />

                                <NavLink to="/liveStream" className=  {` text-decoration-none mt-1 ms-2 ${({isActive}) => (isActive ? "active" : 'none')} `} id='live_link-is'>{t('nav.4')}</NavLink>
                        </div>
                        <div className="d-flex mt-3 lang" style={{"transform":"translateX(30px)"}}>
                        <p style={{"color":"#fff","cursor":"pointer"}} className={` ${localStorage.getItem('i18nextLng') == 'az' ? "active" : ""}`} onClick={()=>{setClick(1)
                        handleClick("az")
                        }}>AZ</p>
                        <span style={{"color":"#fff"}} className="mx-1">|</span>
                        <p style={{"color":"#fff","cursor":"pointer"}} className={` ${localStorage.getItem('i18nextLng') == 'en' ? "active" : ""}`}onClick={()=>{setClick(2)
                         handleClick("en")
                        }}>EN</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
      </>
    )
}

export default Nav