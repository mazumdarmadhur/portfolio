import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='app__work-filter-item-1'>Download CV</a>
        <a href="#contact" className='app__work-filter-item-2'>Coffee With Me</a>
    </div>
  )
}

export default CTA