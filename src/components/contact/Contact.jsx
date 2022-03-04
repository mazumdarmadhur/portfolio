import React, { useState } from 'react'
import './contact.scss'
import Linkedin from '../../assets/linkedin.png'
import Email from '../../assets/email.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';


const Result = () => {
  return (
    <motion.h3
      exit={{ y: -1000 }}>
      Thank you for getting in <span>touch!</span>
    </motion.h3>
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
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <section id='contact' className='app__footer'>
      <div className="contact__section">
        <motion.h2
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="head-text">Take A Coffee & <span>Chat With Me</span></motion.h2>

        <div className="container footer__container">
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={Email} alt="email" />
              <a href="mailto:hey@sanjitmajumdar.com" className="p-text">hey@sanjitmajumdar.com</a>
            </div>
            <div className="app__footer-card">
              <img src={Linkedin} alt="linkedin" />
              <a href="https://www.linkedin.com/in/sanjit-majumdar/" target='_blank' className="p-text">sanjit-majumdar@linkedin.com</a>
            </div>
          </motion.div>

          <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="name" required />
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" required />
            </motion.div>
            <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                required
              />
            </motion.div>
            <motion.button
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              type="submit"
              className="p-text" >Send Message</motion.button>

            <motion.div className='TQ_Msg'
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              exit={{ y: -1000 }}>
              {result ? <Result /> : null}
            </motion.div>
          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact