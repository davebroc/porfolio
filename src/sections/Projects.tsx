import ProjectItem from '../components/ProjectItem.tsx';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id='projects' className='scroll-mt-28 '>
            <div className="flex flex-wrap gap-x-5 justify-around">
                {projects.map(project => (
                    <ProjectItem project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
}
