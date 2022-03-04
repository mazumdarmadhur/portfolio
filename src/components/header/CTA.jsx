import React from 'react'
import CV from '../../assets/CV.pdf'
import { motion } from "framer-motion"

function CTA() {
  return (
    <motion.div
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{
        duration: .5,
        ease: 'easeInOut',
      }}
      className="cta">
      <a href={CV} download className='app__work-filter-item-1'>Download CV</a>
      <a href="#contact" className='app__work-filter-item-2'>Coffee With Me</a>
    </motion.div>
  )
}

export default CTA