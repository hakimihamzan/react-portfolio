import bt from './assets/bt.png'
import cg from './assets/cg.png'
import ff from './assets/ff.png'

const data = {

    bugstracking: {
        title: 'BUGSTRACKER',
        url: 'https://bugstracker.xyz',
        codeUrl: 'https://github.com/hakimihamzan/bug-tracker',
        heading: 'Full stack web application for submitting software defects encountered by users.',
        date: 'SEPT2021',
        responsive: false,
        snap: bt,
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
        title: 'FIT FOR CHANGE',
        url: 'https://fitforchange.xyz',
        codeUrl: 'https://github.com/hakimihamzan/Changes_Web',
        heading: 'Full static, responsive landing page for an upcoming Android application.',
        date: 'APR2021',
        responsive: true,
        snap: ff,
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
        codeUrl: 'https://github.com/hakimihamzan/glossary',
        heading: 'Search engine for computer science related words. (Single Page Application)',
        date: 'AUG2021',
        responsive: true,
        snap: cg,
        notePoint: [
            'Built with HTML, CSS, Bootstrap and JavaScript',
            'JavaScript is used to update the page based on user’s interaction',
        ],
        techStack: "HTML, CSS, Bootstrap, JavaScript",
        designInspired: []
    },
}

export default data