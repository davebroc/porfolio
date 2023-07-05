import React from 'react'

export default function ExperienceItem(props) {
    let ex = props.ex;
    let mailtohref = 'mailto:' + ex.refEmail;
    return (

        <div className='bg-slate-600 m-3 p-2 max-w-[95%] overflow-auto sm:p-4 rounded-md'>
            <h3 className='text-xl mb-3'>{ex.title}</h3>
            <p>At {ex.company} {ex.tasks}</p>

            {/* <div className='flex flex-wrap sm:gap-10 mt-5'>
                <p>Reference: {ex.reference}</p>
                <p>Email:<a href={mailtohref}> {ex.refEmail}</a></p>
            </div> */}

        </div>



    )
}
