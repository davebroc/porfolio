import SectionTitle from "../components/SectionTitle";
import { filesPath } from "../util/paths";

export default function About() {
    return (
        <section id='about' className='scroll-mt-28 '>
            <p>Final year student at University of Otago studying Computer Science and Energy Science/Technology with
                <a className='underline' href={filesPath + "otago-transcript.pdf"} target='_blank'> excellent grades</a>. I am a fast learner,
                good at problem solving, and work great in teams.
            </p>
            <br></br>
            <p>
                Experience with data science regression and classification modelling. As well as working with C, C++, Python,
                Java, and JavaScript (React).</p>

            <br></br>
            <p>Outside of my studies and career I enjoy socializing, snowboarding, the gym, and tramping.</p>
            <br></br>
            <p>Interests in the Technology, Energy, and Space Industries.</p>


        </section>
    )
}
