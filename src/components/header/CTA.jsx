import React from 'react'
// import cv from '../../assets/cv.pdf'

const CTA = () => {
    const cv = "get from top"
    return (
        <div className='cta'>
            <a href={cv} download className='btn'>Get Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default CTA