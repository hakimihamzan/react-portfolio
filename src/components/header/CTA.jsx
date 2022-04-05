import React from 'react'
import styles from './CTA.module.css'
// import cv from '../../assets/cv.pdf'

const CTA = () => {
    const cv = "get from top"
    return (
        <div className={styles.cta}>
            <a href={cv} download><button>Get Resume</button></a>
            <a href="#contact"><button className={styles.revert}>Contact Me</button></a>
        </div>
    )
}

export default CTA