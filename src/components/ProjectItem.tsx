import { Project } from '../data/projects';
import { githubIcon, imagesPath, internetIcon } from '../util/paths';

interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    const { title, imgURL, repo, live, description, skills } = project;
    const target = title === 'Portfolio Website' ? '' : '_blank';


    return (
        <div className="my-4 w-110 rounded-lg overflow-hidden relative bg-slate-600/100">
            <img src={imagesPath + imgURL} alt={title} className='w-full h-52 object-cover object-top' />

            <div className='w-11/12 m-auto'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl py-3'>{title}</h1>
                    <div className='flex justify-between'>
                        {repo !== undefined && (
                            <a href={repo} target="_blank" rel="noopener noreferrer">
                                <img className='w-10 h-10 m-2' src={githubIcon} alt='Github repo' />
                            </a>
                        )}
                        {live !== undefined && (
                            <a href={live} target={target} rel="noopener noreferrer">
                                <img className='w-10 h-10 m-2' src={internetIcon} alt='Live' />
                            </a>
                        )}
                    </div>
                </div>
                <p className='mb-3'>{description}</p>

                <div className='flex gap-2 flex-wrap my-5'>
                    {skills.map((skill, index) => (
                        <p key={index} className='p-2 bg-slate-700 rounded-md'>
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
