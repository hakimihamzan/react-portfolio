import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import styles from './HeaderSocial.module.css'

const HeaderSocial = () => {
    return (
        <div className={styles.header__socials}>
            <a href="https://www.linkedin.com/in/hakimihamzan/" rel="noreferrer" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/hakimihamzan" rel="noreferrer" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HeaderSocial