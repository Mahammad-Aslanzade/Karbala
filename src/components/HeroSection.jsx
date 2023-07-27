import React from 'react'
import flag_green from '../assets/karbala-flag-green.png'
import flag_black from '../assets/karbala-flag-black.png'
import interior from '../assets/interior.png'
import text_frame from '../assets/text-frame.png'
import blood_trace from  '../assets/blood_trace.png'
import { NavLink } from 'react-router-dom'


const HeroSection = () => {
    return (
        <section className='hero-section'>
            <img className='trace' src={blood_trace} alt="" />
            <div className="hero-section-container container">
                <div className="head">
                    <h2> <span>İmam Hüseyn</span> <br /> Haqqında</h2>
                </div>

                <div className="main-part">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 hero-left-part">

                                <div className="images-main">
                                    <img className='flag-green' src={flag_green} alt="" />

                                    <img className='flag-black' src={flag_black} alt="" />

                                    <img className='interrior-img' src={interior} alt="" />
                                </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 hero-right-part">
                            <div className="text-box-frame">
                                <img className='text-frame' src={text_frame} alt="" />
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).se Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                            </div>
                            <NavLink to="/imamhussein">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection