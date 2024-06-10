import { imagesPath } from "../util/paths";
import { Experience } from '../data/experiences';
import calcDuration from "../util/calcDuration";

type ExperienceItemProps = {
    item: Experience;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
    return (
        <div className='bg-slate-600/100  my-4 max-w-[95%]  w-110 overflow-auto  rounded-lg'>
            {item.imagePath !== undefined &&
                <img src={imagesPath + item.imagePath} alt={item.company} className='w-full h-52 object-cover  object-top' />
            }
            <div className='w-11/12 m-auto mb-5 mt-4'>

                <h3 className='text-xl font-bold'>{item.title}</h3>
                <div className="flex items-center  mb-1">
                    <h2 className='text-lg'>{item.company} &#183;&nbsp;</h2>
                    <p className='text-sm'>{item.type}</p>
                </div>
                <h4 className='text-sm mb-1 text-gray-700'>{item.start} - {item.end} &#183;&nbsp;{calcDuration(item.start, item.end)}</h4>
                <h4 className='text-sm mb-1 text-gray-700'>{item.location}</h4>
                <p>
                    {item.tasks}
                </p>
            </div>
        </div>
    );
};

