import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#" title='Home' onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#skills" title='Skills' onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href="#portfolio" title='Portfolio' onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" title='Contact' onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
            <a href="#about" title='About' onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        </nav>
    )
}

export default Nav