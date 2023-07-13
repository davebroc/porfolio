import { educations } from '../data/educations'
import EducationItem from '../components/EducationItem'

type Props = {}

export default function Education({ }: Props) {
    return (
        educations.map(education => <EducationItem item={education} />)
    )
}