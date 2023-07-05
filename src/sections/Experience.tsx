import React from 'react'
import ExperienceItem from '../components/ExperienceItem'
import SectionTitle from '../components/SectionTitle'
import experiences from '../data/experiences'

export default function Experience() {
    return (

        <section id='experience' className='scroll-m-18'>
            <SectionTitle>Experience</SectionTitle>
            <div className="flex gap-4 flex-wrap">
                {experiences.map(ex => {
                    return (
                        <ExperienceItem ex={ex} />
                    )
                })}
            </div>



        </section>
    )
}
