import React from 'react';
import './header.scss';
import ME from '../../assets/ME.png';
import HeaderSocials from './HeaderSocials';
import Typewriter1 from './Typewriter';
import CTA from './CTA';

function Header() {
  return (
    <header className='home'>
      <div className='container header__container'>
        <p>Hello👋</p>
        <h2><Typewriter1 /></h2>
        <CTA/>
        <HeaderSocials />
        <a href="#about" className='scroll__down'>Scroll Down</a>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header