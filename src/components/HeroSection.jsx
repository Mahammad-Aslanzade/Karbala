import React from 'react'
import flag_green from '../assets/karbala-flag-green.png'
import flag_black from '../assets/karbala-flag-black.png'
import interior from '../assets/interior.png'
import text_frame from '../assets/text-frame.png'
import blood_trace from  '../assets/blood_trace.png'
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const {t} = useTranslation();
    return (
        <section className='hero-section'>

            <img className='trace' src={blood_trace} alt="" />
            <div className="hero-section-container container">
                <div className="head">
                    <h2> <span>{t('nav.0')}</span> <br /> {t('nav.5')} </h2>
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
                                <p>{t('nav.6')}</p>
                            </div>

                            <button>{t('nav.7')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection