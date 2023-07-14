import { educations } from '../data/educations'
import EducationItem from '../components/EducationItem'

type Props = {}

export default function Education({ }: Props) {
    return (
        <section id='education' className='scroll-mt-28 '>
            {educations.map(education => <EducationItem item={education} />)}
        </section>
    )
}