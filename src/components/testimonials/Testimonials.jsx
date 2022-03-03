import React from 'react'
import './testimonials.scss'
import HTML from '../../assets/html.png';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

const data = [
  {
    avatar: HTML,
    name: 'Rahul',
    review: 'Micael is an awesome developer! I am a backend developer with a passion for building beautiful and functional web applications.',
    company: 'Corpodails'
  },
  {
    avatar: HTML,
    name: 'Anujendra',
    review: 'Originally I was looking for a job as a frontend developer but I found Orion. Orion is a great place to work. The people are friendly, helpful and very knowledgeable. I recommend Orion to anyone looking for a job.',
    company: 'techniche'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className="portfolio__section">
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