import ExperienceItem from '../components/ExperienceItem'
import experiences from '../data/experiences.ts'

export default function Experience() {
    return (
        <section id='experience' className='scroll-mt-28 '>
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
