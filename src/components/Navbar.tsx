


function Navbar() {

    return (
        <nav className="bg-slate-600 flex justify-between md:text-2xl  p-3 w-screen min-w-full items-center z-10 fixed w-full">
            <h1 className="hidden sm:inline font-bold">David Brockbank</h1>
            <div className="flex justify-between gap-4 sm:gap-24 w-fit">
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#projects'>Projects</a>
                {/* <a href='#skills'>Skills</a> */}
                <a href='#contact'>Contact</a>
            </div>

        </nav>
    );
}

export default Navbar