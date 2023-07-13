import { Education } from "../data/educations";

interface EducationItemProps {
    item: Education;
}


export default function EducationItem({ item }: EducationItemProps) {

    return (
        < div className="my-4 w-110 rounded-lg overflow-hidden relative bg-slate-600 pb-4" >
            <img src={item.imagePath} alt={item.provider} className='w-full h-52 object-cover object-top' />

            <div className='w-11/12 m-auto'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl py-3'>{item.qualification}</h1>
                </div>
                <p className='mb-3'>{item.majorMinor}</p>
                <p className='mb-3'>GPA: {item.gpa}</p>
                <a href={item.transcriptPath} target="_blank" className='text-blue-400 underline'>Academic Transcript</a>
            </div>
        </div >
    );
}
