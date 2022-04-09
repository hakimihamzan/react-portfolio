import bt from './assets/bt.png'
import cg from './assets/cg.png'
import ff from './assets/ff.png'
import pf from './assets/pf.png'

const iconSvg = {
    firebase: `<div title="Firebase" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path></svg></div>`,
    reactjs: `<div title="ReactJS" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle></svg></div>`,
    html: `<div title="HTML" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg></div>`,
    css: `<div title="CSS" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path></svg></div>`,
    mui: `<div title="Material UI" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25"></polygon><polygon fill="#0288d1" points="47,20 41,24 41,37 47,33"></polygon><polygon fill="#0288d1" points="47,6 41,10 41,17 47,13"></polygon><polygon fill="#0288d1" points="35,5 29,9 29,29 35,25"></polygon><polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5"></polygon><polygon fill="#0288d1" points="35,12 18,23 18,16 35,5"></polygon><polygon fill="#0288d1" points="35,26 18,37 18,30 35,19"></polygon><polygon fill="#0288d1" points="47,34 30,45 30,38 47,27"></polygon><polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765"></polygon></svg></div>`,
    js: `<div title="JavaScript" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg></div>`,
    github: `<div title="Github" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 32 32"
        style=" fill:#fff;"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg></div>`,
    bootstrap: `<div title="Bootstrap" style="display:inline-block;margin-right:0.5rem;"><svg xmlns="http://www.w3.org/2000/svg"  width="48" height="48" viewBox="0 0 576 512" style=" fill:rgb(108,66,160);"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg></div>`,
}


const data = {
    portfolio: {
        title: 'PORTFOLIO',
        url: '',
        codeUrl: 'https://github.com/hakimihamzan/react-portfolio',
        heading: 'Project portfolio showcase by Hakimi Hamzan',
        date: 'APR2022',
        responsive: true,
        snap: pf,
        notePoint: [
            'Built with ReactJS, HTML, CSS, MUI.',
            'Website contain a showcase of projects, provides contact form and ways to get in touch with me.',
        ],
        techStack: [

            iconSvg['reactjs'],
            iconSvg['html'],
            iconSvg['css'],
            iconSvg['mui'],
        ],
        designInspired: [
            {
                url: 'https://www.youtube.com/watch?v=G-Cr00UYokU&t=841s',
                creator: 'Egator',
                title: 'React Portfolio'
            },
        ]
    },

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
        techStack: [
            iconSvg['js'],
            iconSvg['html'],
            iconSvg['css'],
            iconSvg['firebase'],
            iconSvg['github'],
        ],
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
        techStack: [
            iconSvg['html'],
            iconSvg['css'],
            iconSvg['bootstrap'],
            iconSvg['firebase'],
        ],
        designInspired: []
    },

    codingglossary: {
        title: 'CODE GLOSSARY',
        url: 'https://hakimihamzan.github.io/glossary/',
        codeUrl: 'https://github.com/hakimihamzan/glossary',
        heading: 'Search engine for computer science related words. (Single Page Application)',
        date: 'AUG2021',
        responsive: true,
        snap: cg,
        notePoint: [
            'Built with HTML, CSS, Bootstrap and JavaScript',
            "JavaScript is used to update the page based on user's interaction",
        ],
        techStack: [
            iconSvg['html'],
            iconSvg['css'],
            iconSvg['bootstrap'],
            iconSvg['js'],
        ],
        designInspired: []
    },
}

export default data