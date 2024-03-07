import { imagesPath } from "../util/paths";
import { Experience } from '../data/experiences';

type ExperienceItemProps = {
    item: Experience;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
    return (
        <div className='bg-slate-600 my-4 max-w-[95%]  w-110 overflow-auto  rounded-lg'>
            {item.imagePath !== undefined &&
                <img src={imagesPath + item.imagePath} alt={item.company} className='w-full h-52 object-cover  object-top' />
            }
            <div className='w-11/12 m-auto mb-5 mt-4'>

                <h3 className='text-xl'>{item.title}</h3>
                <h2 className='text-lg font-bold mb-1'>{item.company}</h2>
                <p>
                    {item.tasks}
                </p>
            </div>
        </div>
    );
};

