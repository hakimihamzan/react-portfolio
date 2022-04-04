import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='skills'>
            <h5>My Skills</h5>
            <h2>Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>

                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NextJS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>TailwindCSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Angular</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>

                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Php</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience