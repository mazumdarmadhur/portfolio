import React from 'react';
import './header.scss';
import { motion } from 'framer-motion';
import ME from '../../assets/ME2.png';
import HeaderSocials from './HeaderSocials';
import Typewriter1 from './Typewriter';
import CTA from './CTA';
import { BsMouse } from 'react-icons/bs';

function Header() {
  return (
    <header className='home' id='home'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="logo">
        <p className='header__logo'>Sanjit Majumdar</p>
      </motion.div>

      <div className='container header__container'>
        <p>Hello👋</p>
        <h2><Typewriter1 /></h2>
        <CTA />
        <HeaderSocials />
        <motion.a
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          href="#about" className='scroll__down'>
          <i className='scroll__icon'><BsMouse /></i>
          <span className='scroll__name'>
            Scroll Down
          </span>
        </motion.a>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.5, delayChildren: 0.5 }} className="me">
          <img src={ME} alt="me" />
        </motion.div>
      </div>
    </header>
  )
}

export default Header