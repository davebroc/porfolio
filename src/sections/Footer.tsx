export default function Footer() {
    return (
        <footer className='bottom-0 absolute w-full p-5 bg-slate-600/100'>
            <p className='sm:text-center text-left '>
                All rights reserved
            </p>
            <div className='absolute flex  m-0 top-1 right-1'>
                <a href='mailto:davbrockbank@gmail.com' target="_blank">
                    <img className='w-10 h-10 m-2' src='/icons/email.svg' alt='Email' />
                </a>
                <a href='https://github.com/davebroc' target="_blank">
                    <img className='w-10 h-10 m-2' src='/icons/github.png' alt='Github repo' />
                </a>

                <a href='https://www.linkedin.com/in/david-brockbank/' target="_blank">
                    <img className='w-10 h-10 m-2' src='/icons/LinkedIn_icon.svg.png' alt='LinkedIn' />
                </a>
            </div>

        </footer>
    )
}
