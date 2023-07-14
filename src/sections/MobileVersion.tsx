import Navbar from '../components/Navbar'
import Welcome from './Welcome'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Footer from './Footer'
import SectionTitle from '../components/SectionTitle'

type Props = {}

export default function MobileVersion({ }: Props) {
    return (
        <div className="relative text-gray-200 bg-slate-800 w-screen flex-col h-max pb-48">
            <Navbar />
            <Welcome />
            <div className="max-w-5xl mx-auto w-11/12 " >
                <h2 className='text-2xl my-5'>About</h2>
                <About />
                <h2 className='text-2xl my-5'>Education</h2>
                <Education />
                <h2 className='text-2xl my-5'>Experience</h2>
                <Experience />
                <h2 className='text-2xl my-5'>Projects</h2>
                <Projects />
            </div>
            <Footer />
        </div>
    )
}