import { Education } from "../data/educations";
import { imagesPath } from "../util/paths";

interface EducationItemProps {
    item: Education;
}


export default function EducationItem({ item }: EducationItemProps) {

    return (
        <div className='bg-slate-600 m-3 pb-4 w-fit max-w-[95%] overflow-auto  rounded-md'>

            <img src={imagesPath + item.imagePath} alt={item.provider} className='w-full h-64 object-cover  object-top' />

            <div className='w-11/12 m-auto'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl py-3'>{item.qualification}</h1>
                </div>
                <p className='mb-3'>{item.majorMinor}</p>
                <p className='mb-3'>GPA: {item.gpa}</p>
                <a href={item.transcriptPath} target="_blank" className='text-blue-400 underline'>Academic Transcript</a>
                <br/>
                <a href={item.degreePath} target="_blank" className='text-blue-400 underline'>Degree</a>
            </div>
        </div >
    );
}
