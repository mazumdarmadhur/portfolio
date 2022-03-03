import React from 'react'
import {Typewriter} from 'react-simple-typewriter';

function Typewriter1() {
    return (
        <div className='typwriter__Section'><p>I'm <span style={{ color: '#fcaf16', fontWeight: 'bold' }}>
            <Typewriter
                words={['Sanjit Majumdar.', 'a Front-End Dev.', 'a Freelancer.','a Proud Indian.']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </span></p>
        </div>
    )
}

export default Typewriter1;