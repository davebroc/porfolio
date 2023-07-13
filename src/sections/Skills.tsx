import SectionTitle from '../components/SectionTitle.tsx'
import SkillCategory from '../components/SkillCategory.tsx'

export default function Skills() {
    return (
        <section id='skills'>
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap justify-around">

                {/* <SkillItem>React</SkillItem>
                <SkillItem>CSS</SkillItem>
                <SkillItem>HTML</SkillItem>
                <SkillItem>JS</SkillItem>
                <SkillItem>Java</SkillItem> */}

                {/* <SkillItem>Python</SkillItem>
                <SkillItem>Jupyter Lab</SkillItem>
                <SkillItem>Unsupervised Learning</SkillItem>
                <SkillItem>Supervised Learning</SkillItem> */}

                <SkillCategory text="Data Science">{
                    ["Python", "scikit-learn", "Unsupervised Learning", "Supervised Learning"]}
                </SkillCategory>
                <SkillCategory text="Front End">{
                    ["HTML", "CSS", "Javascript", "React"]}
                </SkillCategory>
                <SkillCategory text="Back End">{
                    ["NodeJS", "MongoDB"]}
                </SkillCategory>
                <SkillCategory text="Programming">{
                    ["Java", "C"]}
                </SkillCategory>
            </div>
        </section>
    )
}
