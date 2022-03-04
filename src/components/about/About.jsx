import React from 'react'
import './about.scss'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id='about'>
      <div className='about__section'>
        <div className='head__title'>
          <h2 className="head-text">About <span>ME</span></h2>
        </div>

        <div className='about__text'>
          <p>
            Hey! I am <span> Sanjit Majumdar</span>. A 25 year old Web Developer, Freelancer & a Marketing Automation Specialist based in Kanpur, India🌍. <br />
            I am an Endless seeker of Knowledge🧠. I speak, read and write in Hindi & English. I am constantly learning Web technologies and other design related topics, currently playing around with React👩🏾‍💻. <br />
            When I am not tapping the keys on the keyboard, you'll find me watching YouTube videos💻 or listening to music🎧. <br />
            <br />
            I am fully committed to <span>creating</span> aesthetically <span>beautiful</span>, <span>responsive</span> and <span>usable products</span> 💻. I am skilled in many areas of design and development😎 and I am always excited to do business with like minded people, lets discuss over <a href="#contact">coffee</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About