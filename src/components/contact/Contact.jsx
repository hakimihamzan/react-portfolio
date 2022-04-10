import styles from './Contact.module.css'
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaCheck } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_55ac8fe', 'template_rwy8a6o', form.current, process.env.REACT_APP_EMAILJS_API)
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true)
                setTimeout(() => {
                    setIsSuccess(prev => !prev)
                }, 3500);

            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

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
                    <h3>Send Message</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your full name' required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <textarea name="message" rows="10" placeholder='Your message' required></textarea>
                        <button type="submit">Submit {isSuccess && (<span style={{ position: 'absolute', right: '1rem' }}><FaCheck /></span>)}</button>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Contact