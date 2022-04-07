import React from 'react'
import styles from './Portfolio.module.css'
import port from '../../assets/portfolio1.jpg'
import Modal from '../modal/Modal'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Portfolio</h5>
            <h2>Projects & Showcase</h2>

            <div className={styles.portfolio__container}>
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Bugs Tracking Web Application</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <Modal name='bugstracking' />
                </div>
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Landing Page for Android app</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <Modal name='fitforchange' />
                </div>
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Bugs Tracking Web Application</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <Modal name='codingglossary' />
                </div>
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Bugs Tracking Web Application</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <Modal name='codingglossary' />
                </div>
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Bugs Tracking Web Application</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <Modal name='codingglossary' />
                </div>
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Bugs Tracking Web Application</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <Modal name='codingglossary' />
                </div>
            </div>


        </section>
    )
}

export default Portfolio