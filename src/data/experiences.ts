class Experience {
    public company: string;
    public imagePath: string | undefined;
    public duration: string;
    public tasks: string;
    public title: string;

    constructor(
        company: string,
        imagePath: string,
        duration: string,
        tasks: string,
        title: string,
    ) {
        this.company = company;
        this.company = company;
        this.imagePath = imagePath;
        this.duration = duration;
        this.tasks = tasks;
        this.title = title;
    }
}

const experiences = [
    {
        company: "Fast Enterprises",
        imagePath: "fast.jpg",
        duration: "six months",
        tasks: `Application support work for Inland Revenue's tax software. Diagnosed and solved bugs using mixture of C# code and configuration. Worked closely with non-technical IR staff to get requirements for solutions that I would then implement. `,
        title: "Implementation Consultant",
    },
    {
        company: "Iris Data Science",
        imagePath: "iris.jpg",
        duration: "three months",
        tasks: `Design and development work on a agricultural farming PWA for Agriganics. 
        Implemented extensive offline capabilities, workflow design, and front-end development.
        It is currently being used by farmers in NZ, Europe, and USA.`,
        title: "Software developer",
    },
    {
        company: "MTF Finance",
        imagePath: "mtf.png",
        duration: "three months",
        tasks: `C# work on upgrading MTF's internal lending software.`,
        title: "Software Engineer Intern",
    },
    {
        company: "University of Otago",
        imagePath: "otago.jpg",
        duration: "four months",
        tasks: `Guided students completing lab work for COSC202 - Software Development.`,
        title: "Computer Science Demonstrator",
    },
    {
        company: "Brockbank Properties",
        imagePath: undefined,
        duration: "five summers",
        tasks: "Installing electric fencing, building frames, concrete pouring, painting, and plastering. Occasional leadings of small teams.",
        title: "Plasterer, Labourer",
    }

]

export { Experience, experiences };
