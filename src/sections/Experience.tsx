import ExperienceItem from '../components/ExperienceItem'
import { experiences } from '../data/experiences'


export default function Experience() {
    return (
        <section id='experience' className="scroll-mt-28 flex p-5 flex-col">
            {experiences.map(ex => {
                return (
                    <ExperienceItem item={ex} />
                )
            })}
        </section>
    )
}
