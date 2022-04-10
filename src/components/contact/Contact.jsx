import React from 'react'
import styles from './Contact.module.css'
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <section className={styles.contactSection} id='contact'>
            <h5>My Contact</h5>
            <h2>Get in Touch</h2>

            <div className={styles.contactContainer}>
                <div className={styles.content}>
                    <div className={styles.eachContent}>
                        <MdEmail style={{ fontSize: '2rem', marginBottom: '0.3rem' }} />
                        <h4>Email</h4>
                        <p>hakimihamzan10@gmail.com</p>
                        <a href="mailto:hakimihamzan10@gmail.com">Send Email <FaExternalLinkAlt style={{ transform: 'translateY(2px)', marginLeft: '0.5rem', cursor: 'pointer' }} /></a>
                    </div>
                    <div className={styles.eachContent}>
                        <FaLinkedin style={{ fontSize: '2rem', marginBottom: '0.3rem' }} />
                        <h4>LinkedIn</h4>
                        <p>Hakimi Hamzan</p>
                        <a href="https://www.linkedin.com/in/hakimihamzan/" target="_blank" rel="noopener noreferrer">Connect  <FaExternalLinkAlt style={{ transform: 'translateY(2px)', marginLeft: '0.5rem', cursor: 'pointer' }} /></a>
                    </div>
                    <div className={styles.eachContent}>
                        <FaGithub style={{ fontSize: '2rem', marginBottom: '0.3rem' }} />
                        <h4>Github</h4>
                        <p>Hakimi Hamzan</p>
                        <a href="https://github.com/hakimihamzan" target="_blank" rel="noopener noreferrer">Visit  <FaExternalLinkAlt style={{ transform: 'translateY(2px)', marginLeft: '0.5rem', cursor: 'pointer' }} /></a>
                    </div>

                </div>
                <div className={styles.form}>
                    <h3>SEND MESSAGE</h3>
                    <form>
                        <input type="text" name='name' placeholder='Your full name' required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <textarea name="message" rows="10" placeholder='Your message' required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Contact