import React, { useEffect, useRef, useState } from 'react'
import AnimatedText from 'react-animated-text-content';
import { BsFillCaretDownFill } from 'react-icons/bs'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/headshot.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className='text-content'>
                <h5>My name is</h5>
                <h1>
                    <AnimatedText
                        type='chars'
                        interval={0.0005}
                        duration={0.25}
                        animation={{
                            x: '102px',
                            ease: 'ease-out',
                            scale: 3.27,
                        }}
                    >
                        Hakimi Hamzan
                    </AnimatedText>
                </h1>
                <h5 className="text-light" >~ Fullstack Developer ~</h5>
            </div>
            <CTA />
            <HeaderSocial />

            <div className="me">
                <img src={me} alt="Headshot" />
            </div>

            <a href="#contact" className='scroll__down'><BsFillCaretDownFill fontSize={'1.3rem'} /></a>

        </header>
    )
}

export default Header