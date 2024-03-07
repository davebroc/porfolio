import { educations } from '../data/educations'
import EducationItem from '../components/EducationItem'

export default function Education() {
    return (
        <section id='education' className='scroll-mt-28 p-5'>
            {educations.map(education => <EducationItem item={education} />)}
        </section>
    )
}