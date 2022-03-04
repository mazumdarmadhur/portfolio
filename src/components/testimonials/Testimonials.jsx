import React from 'react'
import './testimonials.scss'
import ANUJ from '../../assets/Anuj.png';
import Rahul from '../../assets/Rahul.png';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

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
        <h2 className="head-text">Testimonials</h2>

        <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review, company }, index) => {
              return (
                <SwiperSlide>
                  <div key={index} className="app__testimonial-item app__flex">
                    <img src={avatar} alt='' />
                    <div className="app__testimonial-content">
                      <p className="p-text">{review}</p>
                      <div>
                        <h4 className="bold-text">{name}</h4>
                        <h5 className="p-text">{company}</h5>
                      </div>
                    </div>
                  </div>
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