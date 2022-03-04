import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className="header__socials ">
            <div>
                <a href="https://www.linkedin.com/in/sanjit-majumdar/" target="_blank"><BsLinkedin /> </a>
            </div>
            <div>
                <a href="https://github.com/mazumdarmadhur" target="_blank"><FaGithubAlt /> </a>
            </div>
            <div>
                <a href="https://twitter.com/majumdar_san" target="_blank"><BsTwitter /> </a>
            </div>
        </div>
    );
}

export default HeaderSocials