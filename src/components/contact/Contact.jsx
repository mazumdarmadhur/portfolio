import React, { useState } from 'react'
import './contact.scss'
import Linkedin from '../../assets/linkedin.png'
import Email from '../../assets/email.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Result = () => {
  return (
    <h3 className="">
      Thank you for getting in touch!
    </h3>
  )
}

function Contact() {
  const [result, showResult] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4nf4skp', 'template_yby2vrb', form.current, 'wd9Vf7Wq5W8A0y6bv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };

//Hide Result
setTimeout(() =>{
  showResult(false);
},5000);

  return (
    <section id='contact' className='app__footer'>
      <div className="contact__section">
        <h2 className="head-text">Take A Coffee & Chat With Me</h2>

        <div className="container footer__container">
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={Email} alt="email" />
              <a href="mailto:hey@sanjitmajumdar.com" className="p-text">hey@sanjitmajumdar.com</a>
            </div>
            <div className="app__footer-card">
              <img src={Linkedin} alt="linkedin" />
              <a href="https://www.linkedin.com/in/sanjit-majumdar/" target='_blank' className="p-text">sanjit-majumdar@linkedin.com</a>
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

            <div>
              {result ? <Result /> : null}
            </div>
          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact