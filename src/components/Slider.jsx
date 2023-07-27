import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Banner_1 from '../assets/banner_1.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function App() {
    const {t} = useTranslation();
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide id='banner-is'>
                    <img src={Banner_1} className='img-fluid' alt="" />
                   <div className="divbox">
                   <h1 className='text-uppercase fw-bold'>{t('nav.0')} </h1>
                   </div>
                </SwiperSlide>
                <SwiperSlide id='banner-is'>
                    <img src={Banner_1} className='img-fluid' alt="" />
                    <div className="divbox">
                    <h1 className='text-uppercase fw-bold'>{t('nav.2')} </h1>
                    </div>
                </SwiperSlide>
           
                <SwiperSlide id='banner-is'>
                    <img src={Banner_1} className='img-fluid' alt="" />
                 <div className="divbox">
                 <h1 className='text-uppercase fw-bold'>{t('nav.3')} </h1>
                 </div>
                </SwiperSlide>
           
            </Swiper>
        </>
    );
}