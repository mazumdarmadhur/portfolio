import React from 'react';
import './portfolio.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';

const data = [
    {
        id: 1,
        image: Portfolio1,
        live: 'https://corpodial-infosolutions.netlify.app/',
        github: 'https://github.com/mazumdarmadhur/Corpodials-Infosolution',
        title: 'Corpodials Infosolutions',
        para: 'Website for the client to enhance their online presence.',
        display: ''
    },
    {
        id: 2,
        image: Portfolio2,
        live: 'https://techniche.in/',
        github: '',
        title: 'Techniche',
        para: ' A tech-blog website for a client which provides technology news.',
        display: 'none'
    },
    {
        id: 3,
        image: Portfolio3,
        live: 'https://mazumdarmadhur.github.io/note-app/',
        github: 'https://github.com/mazumdarmadhur/note-app',
        title: 'Note/Todo App',
        para: 'Note App/Todo app build in javascript',
        display: ''
    }
]

function Portfolio() {
    return (
        <section id='portfolio' className='app__works'>
            <div className="portfolio__section">
                <h2 className="head-text">My Creative <span>Portfolio</span></h2>

                <div className="container  portfolio__container">
                    {
                        data.map(({ id, image, live, github, title, para, display }) => {
                            return (
                                <article key={id} className='portfolio__item'>
                                    <div className="portfolio__item-image ">
                                        <img src={image} alt="" />

                                        <div className="app__work-hover app__flex">
                                            <div className=' app__flex'>
                                                <a href={live} target='_blank' rel="noopener noreferrer">
                                                    <AiFillEye />
                                                </a>
                                            </div>
                                            <div className=' app__flex' style={{display: display}}>
                                                <a href={github} target='_blank' rel="noopener noreferrer">
                                                    <AiFillGithub />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="app__work-content app__flex">
                                        <h4 className="bold-text">{title}</h4>
                                        <p className="p-text">{para}</p>
                                    </div>
                                </article>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Portfolio