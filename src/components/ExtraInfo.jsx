import React from 'react'
import styles from './ExtraInfo.module.css'
import { FaGithub, FaEye } from 'react-icons/fa'
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
                    {/* <p><span className={styles.paraStyled}>Tech Stack</span> {`   `}{currentProject.techStack}</p>
                    <br />
                    {currentProject.designInspired.length > 0 ? (
                        <>
                            <p><span className={styles.paraStyled}>UI Inspiration</span></p>
                            <ul className={styles.ul} style={{ marginTop: '0.5rem' }}>
                                {currentProject.designInspired.map((design, index) => (
                                    <li key={index}><a href={design.url}>{design.title} by {design.creator}</a></li>
                                ))}
                            </ul>
                        </>
                    ) : (<p>UI Inspiration : Original</p>)} */}
                </div>
            </div>

        </>
    )
}

export default ExtraInfo