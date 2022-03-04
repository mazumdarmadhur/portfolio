import React from 'react';
import './nav.scss';
import { BiHomeCircle } from 'react-icons/bi';
import { TiUser } from 'react-icons/ti';
import { RiServiceLine } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { RiContactsBook2Line } from 'react-icons/ri';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Nav() {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <motion.nav initial={{opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeCircle /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><TiUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Line /></a>
    </motion.nav>
  )
}

export default Nav