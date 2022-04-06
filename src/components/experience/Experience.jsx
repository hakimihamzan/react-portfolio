import React from 'react'
// import './Experience.css'
import styles from './Experience.module.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='skills'>
            <h5>My Skills</h5>
            <h2>Tools and Language</h2>

            <div className={`${styles.container} experience__container`}>
                <div className={styles.experience__frontend}>
                    <h3>Frontend Development</h3>

                    <div className={styles.experience__content}>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
                            <h4 className='text-light'>HTML5</h4>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                            <h4 className='text-light'>CSS3</h4>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                            <h4 className='text-light'>JavaScript</h4>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                            <h4 className='text-light'>ReactJS</h4>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
                            <h4 className='text-light'>Redux</h4>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
                            <h4 className='text-light'>Bootstrap</h4>
                        </article>
                    </div>
                </div>
                <div className={styles.experience__backend}>
                    <h3>Backend Development</h3>

                    <div className={styles.experience__content}>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
                            <div>
                                <h4 className='text-light'>TypeScript</h4>
                            </div>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" style={{ backgroundColor: 'white', padding: '5px' }} width="40" height="40" />
                            <div>
                                <h4 className='text-light'>NodeJS</h4>
                            </div>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" style={{ backgroundColor: 'white', padding: '5px' }} width="40" height="40" />
                            <div>
                                <h4 className='text-light'>Express</h4>
                            </div>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" style={{ backgroundColor: 'white', padding: '5px' }} width="40" height="40" />
                            <div>
                                <h4 className='text-light'>MongoDB</h4>
                            </div>
                        </article>
                        <article className={styles.experience__details}>
                            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
                            <div>
                                <h4 className='text-light'>Firebase</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience