import React from 'react'
import styles from './ExtraInfo.module.css'
import { FaGithub, FaEye } from 'react-icons/fa'

function ExtraInfo({ handleClose, name }) {
    const data = {
        fitforchange: {
            title: 'FIT FOR CHANGE',
            url: 'https://fitforchange.xyz',
            heading: 'Full static, responsive landing page for an upcoming Android application.',
            date: 'APR2021',
            notePoint: [
                'Built with HTML, CSS, Bootstrap and Firebase.',
                'Firebase (Firestore) is used as a database for storing name/email details of interested users.',
            ],
            techStack: "HTML, CSS, Bootstrap, Firebase",
            designInspired: []
        },

        codingglossary: {
            title: 'CODING GLOSSARY',
            url: 'https://hakimihamzan.github.io/glossary/',
            heading: 'Search engine for computer science related words. (Single Page Application)',
            date: 'AUG2021',
            notePoint: [
                'Built with HTML, CSS, Bootstrap and JavaScript',
                'JavaScript is used to update the page based on user’s interaction',
            ],
            techStack: "HTML, CSS, Bootstrap, JavaScript",
            designInspired: []
        },

        bugstracking: {
            title: 'BUGSTRACKER',
            url: 'https://bugstracker.xyz',
            codeUrl: 'https://github.com/hakimihamzan/bug-tracker',
            heading: 'Full stack web application for submitting software defects encountered by users.',
            date: 'SEPT2021',
            notePoint: [
                'Built with JavaScript, HTML, CSS, Firebase and GitHub API.',
                'Firebase (Firestore) is used as a database for storing details of each bug.',
                'Implemented Google Authentication & Authorization for separation of roles.',
                'Implemented Demo Account for Developer and Manager'
            ],
            techStack: "HTML, CSS, JavaScript, Firebase, GitHub API",
            designInspired: [
                {
                    url: 'https://coderthemes.com/hyper/creative/layouts-vertical.html',
                    creator: 'CoderTheme',
                    title: 'Hyper-V Bootstrap Framework'
                },
                {
                    url: 'https://dribbble.com/shots/6398590-DoneDone-2-Mailbox-Home?showSimilarShots=true&_=1630390033997#',
                    creator: 'PixelMatters',
                    title: 'DoneDone 2'
                },
            ]
        },
    }

    const currentProject = { ...data[name] }

    console.log(currentProject.designInspired.length)

    return (
        <>
            <button className={styles.button} onClick={handleClose}>X</button>
            <div className={styles.infoContainer}>
                <div className={styles.canvas}>
                    <div>
                        <button><a href={currentProject.codeUrl} rel="noreferrer" target='_blank'> <FaGithub />CODE</a></button>
                        <button><a href={currentProject.url} rel="noreferrer" target='_blank'><FaEye />LIVE</a></button>
                    </div>
                    <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className={styles.extraInfo}>
                    <h2>{currentProject.title} <small className='text-light' style={{ fontSize: '0.75rem' }}>({currentProject.date})</small></h2>
                    <h3>{currentProject.heading}</h3>
                    <ul className={styles.ul}>{currentProject.notePoint.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                    </ul>
                    <br />
                    <p><span className={styles.paraStyled}>Tech Stack</span> {`   `}{currentProject.techStack}</p>
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
                    ) : (<p>UI Inspiration : Original</p>)}
                </div>
            </div>

        </>
    )
}

export default ExtraInfo