import React from 'react'
import './testimonials.scss'
import HTML from '../../assets/html.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
  
}]

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className="portfolio__section">
        <h2 className="head-text">Testimonials</h2>

        <Swiper className='container testimonials__container'>
          <SwiperSlide>
          <div className="app__testimonial-item app__flex">
            <img src={HTML} alt='' />
            <div className="app__testimonial-content">
              <p className="p-text">Micael is an awesome developer! I am a backend developer with a passion for building beautiful and functional web applications.</p>
              <div>
                <h4 className="bold-text">Rahul</h4>
                <h5 className="p-text">Corpodials</h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="app__testimonial-item app__flex">
            <img src={HTML} alt='' />
            <div className="app__testimonial-content">
              <p className="p-text">Micael is an awesome developer! I am a backend developer with a passion for building beautiful and functional web applications.</p>
              <div>
                <h4 className="bold-text">Rahul</h4>
                <h5 className="p-text">Corpodials</h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials