import React from 'react';
import './header.scss';
import ME from '../../assets/ME.png';
import HeaderSocials from './HeaderSocials';
import Typewriter1 from './Typewriter';


function Header() {
  return (
    <header>
      <div className='container header__container'>
        <p>Hello</p>
        <h3><Typewriter1 /></h3>
        <p>I'm a Front-End Developer, UI/UX Designer and Graphic Artist from Nigeria who is passionate about making sure that systems, interfaces, languages and graphics are human-friendly, emotive and clear. </p>
        <HeaderSocials />
        <a href="#" className='scroll__down'>Scroll Down</a>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header