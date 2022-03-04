import React from 'react'
import './testimonials.scss'
import ANUJ from '../../assets/Anuj.png';
import Rahul from '../../assets/Rahul.png';
import { motion } from 'framer-motion';

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

const data = [{
  avatar: ANUJ,
  name: 'Anujendra Kumar',
  review: 'You have done a great job in building and maintaining our website. The theme is also eye catchy and serves the purpose really well. Happy to work with you!',
  company: 'Techniche.in'
},
{
  avatar: Rahul,
  name: 'Rahul Shukla',
  review: 'Thanks to Upflow, we are able to gain visibility into our customers. Fantastic service and a great guy.',
  company: 'Corpodial Infosolutions'
}
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className="testimonial__section">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}>
          <h2 className="head-text">Testimonials</h2>
        </motion.div>

        <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review, company }, index) => {
              return (
                <SwiperSlide>
                  <motion.div
                    whileInView={{opacity: [0, 1] }}
                    transition={{ duration: 0.4, type: 'tween' }}
                    key={index}
                    className="app__testimonial-item app__flex">
                    <img src={avatar} alt='' />
                    <div className="app__testimonial-content">
                      <p className="p-text">{review}</p>
                      <div>
                        <h4 className="bold-text">{name}</h4>
                        <h5 className="p-text">{company}</h5>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials