import React from 'react'
import './skills.scss'
import { motion } from 'framer-motion'
import Flutter from '../../assets/flutter.png'
import ReactPNG from '../../assets/react.png'
import JS from '../../assets/javascript.png'
import HTML from '../../assets/html.png'
import Git from '../../assets/git.png'
import CSS from '../../assets/css.png'
import Bootstrap from '../../assets/bootstrap.png'
import Java from '../../assets/java.png'
import Marketo from '../../assets/marketo.png'
import Salesforce from '../../assets/salesforce.png'
import Figma from '../../assets/figma.png'
import SASS from '../../assets/sass.png'

const data = [
  {
    id: 1,
    image: HTML,
    title: 'HTML5',
    bgColor: 'rgb(255, 244, 242)'
  },
  {
    id: 2,
    image: CSS,
    title: 'CSS3',
    bgColor: 'rgb(221, 232, 238)'
  },
  {
    id: 3,
    image: JS,
    title: 'Javascript',
    bgColor: 'rgb(253, 247, 209)'
  },
  {
    id: 4,
    image: ReactPNG,
    title: 'React',
    bgColor: 'rgb(236, 252, 255)'
  },
  {
    id: 5,
    image: Bootstrap,
    title: 'Bootstrap',
    bgColor: 'rgb(224,215,240)'
  },
  {
    id: 6,
    image: SASS,
    title: 'Sass',
    bgColor: 'rgb(243, 221, 228)'
  },
  {
    id: 7,
    image: Flutter,
    title: 'Flutter',
    bgColor: 'rgb(209,239,252)'
  },
  {
    id: 8,
    image: Marketo,
    title: 'Marketo',
    bgColor: 'rgb(224,215,240)'
  },
  {
    id: 9,
    image: Salesforce,
    title: 'Salesforce',
    bgColor: 'rgb(222,243,252)'
  },
  {
    id: 10,
    image: Java,
    title: 'Java',
    bgColor: 'rgb(204,220,240)'
  },
  {
    id: 11,
    image: Git,
    title: 'Git',
    bgColor: 'rgb(252, 232, 227)'
  },
  {
    id: 12,
    image: Figma,
    title: 'Figma',
    bgColor: 'rgb(252, 236, 231)'
  }
]



function Skills() {
  return (
    <section id='skills' className='app__skills'>
      <div className='skills__section'>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='head__title'>
          <h2 className="head-text">Skills</h2>
        </motion.div>

        <div className="app_skills_container">
          <motion.div className="test">
            {
              data.map(({ id, image, title, bgColor }) => {
                return (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: .9 }}
                    key={id}
                    className='app__skills-item app__flex'>
                    <div
                      className="app__flex"
                      style={{ backgroundColor: bgColor }}
                    >
                      <img src={image} alt={title} />
                    </div>
                    <p className="p-text">{title}</p>
                  </motion.div>
                )
              })
            }
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills