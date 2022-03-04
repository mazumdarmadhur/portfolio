import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { motion } from "framer-motion";

const HeaderSocials = () => {
    return (
        <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="header__socials ">
            <motion.div whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <a href="https://www.linkedin.com/in/sanjit-majumdar/" target="_blank"><BsLinkedin /> </a>
            </motion.div>
            <motion.div whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <a href="https://github.com/mazumdarmadhur" target="_blank"><FaGithubAlt /> </a>
            </motion.div>
            <motion.div whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <a href="https://twitter.com/majumdar_san" target="_blank"><BsTwitter /> </a>
            </motion.div>
        </motion.div>
    );
}

export default HeaderSocials