import React from 'react'
import SectionTitle from '../components/SectionTitle.tsx'


export default function About() {
    return (
        <section id='about' className='scroll-mt-18 sm:scroll-mt-16'>
            <p>Final year student at University of Otago studying Computer Science and Energy Science/Technology with
                <a className='underline' href='./academic-transcript.pdf' target='_blank'> excellent grades</a>. I am a fast learner,
                good at problem solving, and work great in teams.
            </p>
            <br></br>
            <p>
                Experience with data science regression and classification modelling. As well as working with C, C++, Python,
                Java, and JavaScript (React).            </p>

            <br></br>
            <p>Outside of my studies and career I enjoy socializing, snowboarding, the gym, and tramping.</p>
            <br></br>


        </section>
    )
}
