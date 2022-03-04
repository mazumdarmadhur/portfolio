import React from 'react';
import ScrollToTop from './ScrollToTop';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <p className='footer__logo'>Sanjit Majumdar</p>
      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#testimonials">TESTIMONIAL</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__socials">
      </div>

      <div className="footer__copyright">
        <small><b>No &copy; copyright issues.</b></small>
        <p>Feel free to copy. If you need any help, ping me !</p>
      </div>
      <ScrollToTop/>
    </footer>
  )
}

export default Footer