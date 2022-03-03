import React from 'react'
import './contact.scss'
import Phone from '../../assets/mobile.png'
import Email from '../../assets/email.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4nf4skp', 'template_yby2vrb', form.current, 'wd9Vf7Wq5W8A0y6bv')
    e.target.reset()
  };
  return (
    <section id='contact' className='app__footer'>
      <div className="contact__section">
        <h2 className="head-text">Take A Coffe & Chat With Me</h2>

        <div className="container footer__container">
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={Email} alt="email" />
              <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
            </div>
            <div className="app__footer-card">
              <img src={Phone} alt="phone" />
              <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="name" required />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" required />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                required
              />
            </div>
            <button type="submit" className="p-text" >Send Message</button>
          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact