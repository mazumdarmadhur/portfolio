import React from 'react';
import './portfolio.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Portfolio1 from '../../assets/portfolio1.png';

function Portfolio() {
    return (
        <section id='portfolio' className='app__works'>
            <div className="portfolio__section">
                <h2 className="head-text">My Creative <span>Portfolio</span></h2>

                <div className="container  portfolio__container">
                    <article className='portfolio__item'>
                        <div className="portfolio__item-image ">
                            <img src={Portfolio1} alt="" />

                            <div className="app__work-hover app__flex">
                                <div className=' app__flex'>
                                    <a href="google.com">
                                        <AiFillEye />
                                    </a>
                                </div>
                                <div className=' app__flex'>
                                    <a href="google.com">
                                        <AiFillGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">Corpodails</h4>
                            <p className="p-text">This is test.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Portfolio