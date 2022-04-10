import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <section id='about'>
            <h5>My Story</h5>
            <h2 className={styles.aboutHeading}>How it Happened</h2>

            <div className={styles.aboutContainer}>
                <h2>My name is Muhamad Hakimi Bin Hamzan and I am from Malaysia</h2>
                <p>I have been teaching myself programming ever since 2020. Turns out I really enjoy coding. It is
                    definitely one of my greatest joys in life. I have always dabbled in many things before I set my eyes
                    in coding. TLDR <span className='text-light'>I have a Diploma in Accountancy. But balancing numbers (if you know, you know) is not really
                        my thing. Then I try to learn about business which is something that I am always curious about. There is something
                        fascinating about business where you get exactly what you put in and by the end you get to see something that you
                        build grow into a giant if everything works out. Thus, I dive head first into business by getting a Bachelor's in
                        Business Administration. But still, I have always wanted to be doing businesses related to technology. I graduated
                        early 2020 but the pandemic happened. It was a great opportunity for me to get into programming. So I taught myself
                        coding through various channels like Udemy, Coursera, Youtube, Blogs, Books and right before I got my first job, I enrolled
                        into a JavaScript Bootcamp with General Assembly which taught me so much more than I ever knew. By the end, my journey has begun!
                    </span>
                </p>

                <h2>Even though I have amassed a lot of knowledge over the years, it is still not enough.</h2>
                <p>I enjoy learning new frameworks, languages, and development tools that I can use to further my skill sets. I am a quick learner too.
                    TLDR <span className='text-light'> Recently I have been learning new frameworks such as Svelte and it is absolutely a blast.
                        Svelte is different from React in that Svelte used the DOM in browser while React used a Virtual DOM, and you can imagine the performance
                        on a Svelte app. In the end, React and Svelte are just frameworks that you can use as part of your tools to get the job
                        done based on your needs.</span>
                </p>

                <h2>This wasn't meant to be a blog post but somehow it kind of is.</h2>
                <p>I am open to work opportunities that you might offer me. Any project ideas that you want done and you think that I can help you
                    get it to fruition. Do not hesitate to contact me.
                    <span className='text-light'> I have been getting into freelance world lately and
                        it has been wonderful so far. That's enough about me, I am out!</span>
                </p>
            </div>
        </section>
    )
}

export default About