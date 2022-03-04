import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    window.addEventListener("scroll", toggleVisible);
    return (
        <>
            {visible && (
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "20%", "50%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className="scrollToTop"
                    onClick={scrollToTop}>
                    <IoIosArrowUp />
                </motion.div>
            )}
        </>
    )
}

export default ScrollToTop