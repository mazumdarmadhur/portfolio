import React from 'react';
import ScrollToTop from './ScrollToTop';
import './footer.scss';

import { motion } from 'framer-motion';

const bounceTransition = {
  y: {
    duration: .4,
    yoyo: Infinity,
    ease: "easeIn",
  }
};

function Footer() {
  return (
    <footer>
      <motion.p
        transition={bounceTransition}
        animate={{
          y: ["0em", ".4em"],
        }}
        className='footer__logo'>Sanjit Majumdar</motion.p>
      <motion.ul
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='permalinks'>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a href="#">HOME</a></motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a href="#about">ABOUT</a></motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a href="#portfolio">PORTFOLIO</a></motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a href="#skills">SKILLS</a></motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a href="#testimonials">TESTIMONIAL</a></motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a href="#contact">CONTACT</a></motion.li>
      </motion.ul>

      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="footer__copyright">
        <small><b>No &copy; copyright issues.</b></small>
        <p>Feel free to copy. If you need any help, ping me !</p>
      </motion.div>
      <ScrollToTop />
    </footer>
  )
}

export default Footer