import React from 'react'
import styles from './Portfolio.module.css'
import port from '../../assets/portfolio1.jpg'
import Modal from '../modal/Modal'
import data from '../../data'

const Portfolio = () => {
    const projectNames = Object.keys(data);
    return (
        <section id='portfolio'>
            <h5>My Portfolio</h5>
            <h2>Projects & Showcase</h2>

            <div className={styles.portfolio__container}>
                {projectNames.map((name, index) =>
                (
                    <div className={styles.project} key={index}>
                        <img className={styles.portfolio__image} src={data[name].snap} alt="" />
                        <h4>{data[name].title}</h4>
                        <p className='text-light'>{data[name].heading.substring(0, 51)}...</p>
                        <Modal name={name} />
                    </div>
                ))}
                <div className={styles.project}>
                    <img className={styles.portfolio__image} src={port} alt="" />
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    <button>More Info</button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio