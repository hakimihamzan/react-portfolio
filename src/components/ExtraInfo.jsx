import React from 'react'
import styles from './ExtraInfo.module.css'

function ExtraInfo({ handleClose, name }) {
    const data = {
        bugstracking: {
            title: 'Bugstracker',
            url: 'https://bugstracker.xyz',
            heading: 'Full stack web application for submitting software defects encountered by users.',
            date: 'September 2021',
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

        fitforchange: {
            title: 'Fit For Change',
            url: 'https://fitforchange.xyz',
            heading: 'Full static, responsive landing page for an upcoming Android application.',
            date: 'April 2021',
            notePoint: [
                'Built with HTML, CSS, Bootstrap and Firebase.',
                'Firebase (Firestore) is used as a database for storing name/email details of interested users.',
            ],
            techStack: "HTML, CSS, Bootstrap, Firebase",
            designInspired: [null]
        },

        codingglossary: {
            title: 'Coding Glossary',
            url: 'https://hakimihamzan.github.io/glossary/',
            heading: 'Search engine for computer science related words. (Single Page Application)',
            date: 'August 2021',
            notePoint: [
                'Built with HTML, CSS, Bootstrap and JavaScript',
                'JavaScript is used to update the page based on user’s interaction',
            ],
            techStack: "HTML, CSS, Bootstrap, JavaScript",
            designInspired: [null]
        },
    }



    return (
        <>
            <button className={styles.buttt} onClick={handleClose}>X</button>
            <h1>{JSON.stringify(data[name])}</h1>

        </>
    )
}

export default ExtraInfo