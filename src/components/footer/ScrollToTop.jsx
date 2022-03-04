import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

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
                <div className="scrollToTop" onClick={scrollToTop}>
                    <IoIosArrowUp />
                </div>
            )}
        </>
    )
}

export default ScrollToTop