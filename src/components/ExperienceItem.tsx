import React from 'react';

type ExperienceItemProps = {
    ex: {
        title: string;
        company: string;
        tasks: string;
    };
};

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    const ex = props.ex;
    return (
        <div className='bg-slate-600 m-3 p-2 max-w-[95%]  w-110 overflow-auto sm:p-4 rounded-md'>
            <h3 className='text-xl'>{ex.title}</h3>
            <h2 className='text-lg font-bold mb-1'>{ex.company}</h2>
            <p>
                {ex.tasks}
            </p>
        </div>
    );
};

export default ExperienceItem;
