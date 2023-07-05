import React from 'react'

export default function ProjectItem({ children, id, skills, imgURL, live, repo, description }) {
    let target;
    children === "Portfolio Website" ? target = '' : target = '_blank';


    return (
        <div className="my-4  w-110 rounded-lg overflow-hidden relative  bg-slate-600">
            <img src={imgURL} alt={children} className='w-full h-52 object-cover object-top' />

            <div className='w-11/12 m-auto '>
                <div className='flex justify-between'>
                    <h1 id={id && id} className='text-2xl py-3'>{children}</h1>
                    <div className='flex justify-between'>


                        {repo !== undefined && <a href={repo} target="_blank">
                            <img className='w-10 h-10 m-2' src='./github.png' alt='Github repo' />
                        </a>
                        }
                        {live !== undefined &&
                            <a href={live} target={target}>
                                <img className='w-10 h-10 m-2' src='./internet-icon.svg' alt='Live' />
                            </a>

                        }
                    </div>
                </div>
                <p className='mb-3'>{description}</p>

                <div className='flex gap-2 flex-wrap my-5' >
                    {skills.map(skill => (<p className='p-2 bg-slate-700 rounded-md'>{skill}</p>))}
                </div>

            </div>

        </div>
    )
}
