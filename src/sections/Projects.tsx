import ProjectItem from '../components/ProjectItem.tsx';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <section id='projects'
            className="scroll-mt-28 w-fit p-5 flex flex-col">
            {projects.map(project => (
                <ProjectItem project={project} key={project.title} />
            ))}
        </section>
    );
}
