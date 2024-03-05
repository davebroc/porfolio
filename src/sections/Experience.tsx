import ExperienceItem from '../components/ExperienceItem'
import experiences from '../data/experiences.ts'

export default function Experience() {
    return (
        <section id='experience' className="scroll-mt-28 flex flex-col gap-4 ">
            {experiences.map(ex => {
                return (
                    <ExperienceItem ex={ex} />
                )
            })}
        </section>
    )
}
