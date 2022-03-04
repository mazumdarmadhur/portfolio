import React from 'react';
import './header.scss';
import ME from '../../assets/ME2.png';
import HeaderSocials from './HeaderSocials';
import Typewriter1 from './Typewriter';
import CTA from './CTA';
import { BsMouse } from 'react-icons/bs';

function Header() {
  return (
    <header className='home' id='home'>
      <div className='container header__container'>
        <p>Hello👋</p>
        <h2><Typewriter1 /></h2>
        <CTA />
        <HeaderSocials />
        <a href="#about" className='scroll__down'>
          <i className='scroll__icon'><BsMouse /></i>
          <span className='scroll__name'>
            Scroll Down
          </span>
        </a>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header