import React from 'react'
// eslint-disable-next-line
import styles from './Footer.module.css'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/hakimihamzan/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/hakimihamzan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
            <p>© Copyright {new Date().getFullYear()}, Hakimi Hamzan</p>
        </footer>
    )
}

export default Footer