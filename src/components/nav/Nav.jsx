import React from 'react';
import './nav.scss';
import {BiHomeCircle} from 'react-icons/bi';
import {TiUser} from 'react-icons/ti';
import {RiServiceLine} from 'react-icons/ri';
import {GiSkills} from 'react-icons/gi';
import {RiContactsBook2Line} from 'react-icons/ri';
import {useState} from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeCircle/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><TiUser/></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Line/></a>
    </nav>
  )
}

export default Nav