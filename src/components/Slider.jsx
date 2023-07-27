import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Banner_1 from '../assets/banner_1.png';
import Banner_2 from '../assets/banner_2.jpeg';
import Banner_3 from '../assets/banner_3.jpg';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
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
                    <img src={Banner_2} className='img-fluid' alt="" />
                    <div className='divbox'>
                    <h1 className='text-uppercase fw-bold'>Karbala</h1>

                    </div>
                </SwiperSlide>
                <SwiperSlide id='banner-is'>
                    <img src={Banner_1} className='img-fluid' alt="" />
                    <div className='divbox'>
                    <h1 className='text-uppercase fw-bold'>Karbala</h1>

                    </div>
                </SwiperSlide>
                <SwiperSlide id='banner-is'>
                    <img src={Banner_3} className='img-fluid' alt="" />
                    <div className='divbox'>
                    <h1 className='text-uppercase fw-bold'>Karbala</h1>
                    </div>
                </SwiperSlide>
           
            </Swiper>
        </>
    );
}
