import React from 'react'
import './skills.scss'
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

function Skills() {
  return (
    <section id='skills' className='app__skills'>
      <div className='skills__section'>
        <div className='head__title'>
          <h2 className="head-text">Skills & Experiences</h2>
        </div>

        <div className="app_skills_container">
          <div className="test">
            
            {/* React  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff'}}
              >
                <img src={ReactPNG} alt='React' />
              </div>
              <p className="p-text">React</p>
            </div>

            {/* Javascript */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={JS} alt='Javascript' />
              </div>
              <p className="p-text">Javascript</p>
            </div>

            {/* Flutter  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Flutter} alt='Flutter' />
              </div>
              <p className="p-text">Flutter</p>
            </div>

            {/* HTML */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={HTML} alt='HTML5' />
              </div>
              <p className="p-text">HTML5</p>
            </div>

            {/* CSS */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={CSS} alt='CSS3' />
              </div>
              <p className="p-text">CSS3</p>
            </div>

            {/* Bootstrap  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Bootstrap} alt='Bootstrap' />
              </div>
              <p className="p-text">Bootstrap</p>
            </div>

            {/* Git */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Git} alt='Git' />
              </div>
              <p className="p-text">Git</p>
            </div>

            {/* JAVA  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Java} alt='Java' />
              </div>
              <p className="p-text">Java</p>
            </div>

            {/* Marketo  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Marketo} alt='Marketo' />
              </div>
              <p className="p-text">Marketo</p>
            </div>

            {/* Salesforce  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Salesforce} alt='Salesforce' />
              </div>
              <p className="p-text">Salesforce</p>
            </div>

            {/* Figma  */}
            <div className='app__skills-item app__flex'>
              <div
                className="app__flex"
                style={{ backgroundColor: '#fff' }}
              >
                <img src={Figma} alt='Figma' />
              </div>
              <p className="p-text">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills