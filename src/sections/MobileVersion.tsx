import Navbar from '../components/Navbar'
import Welcome from './Welcome'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Footer from './Footer'

type Props = {}

export default function MobileVersion({ }: Props) {
    return (
        <div className="relative text-gray-200 bg-slate-800 w-screen flex-col h-max pb-48">
            <Navbar />
            <Welcome />
            <div className="max-w-5xl mx-auto w-11/12 " >
                <About />
                <Education />
                <Experience />
                <Projects />
            </div>
            <Footer />
        </div>
    )
}