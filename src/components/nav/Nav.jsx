import React from 'react';
import './nav.scss';
import {BiHomeCircle} from 'react-icons/bi';
import {TiUser} from 'react-icons/ti';
import {RiServiceLine} from 'react-icons/ri';
import {GiSkills} from 'react-icons/gi';
import {RiContactsBook2Line} from 'react-icons/ri';

function Nav() {
  return (
    <nav>
      <a href="#"><BiHomeCircle/></a>
      <a href="#about"><TiUser/></a>
      <a href="#"><GiSkills/></a>
      <a href="#"><RiServiceLine/></a>
      <a href="#"><RiContactsBook2Line/></a>
    </nav>
  )
}

export default Nav