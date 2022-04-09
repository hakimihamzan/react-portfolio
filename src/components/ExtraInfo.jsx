import React from 'react'
import styles from './ExtraInfo.module.css'
import { FaGithub, FaEye, FaPhone, FaMobile, FaTablet, FaLaptop, FaExternalLinkAlt } from 'react-icons/fa'
import data from '../data'



function ExtraInfo({ handleClose, name }) {
    const currentProject = { ...data[name] }

    return (
        <>
            <button className={styles.button} onClick={handleClose}>X</button>
            <div className={styles.infoContainer}>
                <div className={styles.canvas}>
                    <div>
                        <button><a href={currentProject.codeUrl} rel="noreferrer" target='_blank'> <FaGithub />CODE</a></button>
                        <button><a href={currentProject.url} rel="noreferrer" target='_blank'><FaEye />LIVE</a></button>
                    </div>
                    <img src={currentProject.snap} alt="project" />
                </div>
                <div className={styles.extraInfo}>
                    <h2>{currentProject.title} <small className='text-light' style={{ fontSize: '0.75rem' }}>({currentProject.date})</small></h2>
                    <h3>{currentProject.heading}</h3>

                    <ul className={styles.ul}>{currentProject.notePoint.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                    </ul>

                    <br />
                    <p style={{ fontWeight: 'bolder', textDecoration: 'underline', marginTop: '0.8rem' }}>TECH STACK</p>
                    <div style={{ marginTop: '0.5rem' }}>
                        {currentProject.techStack.map((tech, index) => (
                            <span key={index} dangerouslySetInnerHTML={{ __html: tech }} ></span>
                        ))}
                    </div>

                    <br />
                    <p style={{ fontWeight: 'bolder', textDecoration: 'underline', marginTop: '0.8rem' }}>SUPPORTED PLATFORMS</p>
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
                        {currentProject.responsive ? (
                            <>
                                <FaLaptop title='Laptop' style={{ fontSize: '2.5rem', marginRight: '0.8rem' }} />
                                <FaTablet title='Tablet' style={{ fontSize: '2rem', marginRight: '0.8rem' }} />
                                <FaMobile title='Mobile' style={{ fontSize: '2rem', marginRight: '0.8rem' }} />
                            </>
                        ) : (
                            <FaLaptop title='Laptop' style={{ fontSize: '2.5rem', marginRight: '0.8rem' }} />
                        )}
                    </div>

                    <br />
                    <p style={{ fontWeight: 'bolder', textDecoration: 'underline', marginTop: '0.8rem' }}>DESIGN INSPIRATION</p>
                    {currentProject.designInspired.length > 0 ? (
                        <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>{currentProject.designInspired.map((design, index) => (
                            <li key={index}><a href={design.url} target="_blank" rel="noopener noreferrer">{design.title} by {design.creator} <FaExternalLinkAlt style={{ transform: 'translateY(2px)', marginLeft: '0.5rem', cursor: 'pointer' }} /></a></li>
                        ))}
                        </ul>
                    ) : (<div style={{ color: 'var(--color-primary-variant)', fontWeight: 'bolder' }}>ORIGINAL</div>)}
                </div>
            </div>

        </>
    )
}

export default ExtraInfo