class Experience {
    public company: string;
    public imagePath: string | undefined;
    public start: string;
    public end: string;
    public type: string;
    public location: string;
    public tasks: string;
    public title: string;

    constructor(
        company: string,
        imagePath: string,
        start: string,
        end: string,
        type: string,
        location: string,
        tasks: string,
        title: string,
    ) {
        this.company = company;
        this.imagePath = imagePath;
        this.start = start;
        this.end = end;
        this.type = type;
        this.location = location;
        this.tasks = tasks;
        this.title = title;
    }
}

const experiences = [
    {
        company: "Fast Enterprises",
        imagePath: "fast.jpg",
        start: "Nov 2023",
        end: "Jun 2024",
        type: "Full-time",
        location: "Wellington, New Zealand",
        tasks: `Development and consulting for Inland Revenue's tax software. 
        Worked with non-technical client to discuss issues and requirements. 
        Implemented features and fixes in C# and SQL, worked closely with domain specialists to extensively test before releasing to production.
        Evaluated potential features against system capabilities and clearly communicated them to the client. `,
        title: "Implementation Consultant",
    },
    {
        company: "MTF Finance",
        imagePath: "mtf.png",
        start: "Sep 2023",
        end: "Nov 2023",
        type: "Internship",
        location: "Dunedin, New Zealand",
        tasks: `Researched potential technologies to be used for an upgrade of internal lending software.`,
        title: "Software Engineer Intern",
    },
    {
        company: "University of Otago",
        imagePath: "otago.jpg",
        start: "Feb 2023",
        end: "Jun 2023",
        type: "Part-time",
        location: "Dunedin, New Zealand",
        tasks: `Guided students completing lab work for COSC202 - Software Development.`,
        title: "Computer Science Demonstrator",
    },
    {
        company: "Iris Data Science",
        imagePath: "iris.jpg",
        start: "Dec 2022",
        end: "Mar 2023",
        type: "Internship",
        location: "Dunedin, New Zealand",
        tasks: `Design and development on a agricultural farming PWA for Agriganics in React. 
        Implemented extensive offline capabilities, workflow design, and front-end development. 
        Focus on defining, creating, and refining user experience on mobile and desktop environments.`,
        title: "Software developer",
    },
    {
        company: "Thames Treasury",
        imagePath: "treasury.jpg",
        start: "Aug 2020",
        end: "Oct 2020",
        type: "Volunteer",
        location: "Thames, New Zealand",
        tasks: "Digitized historical records and photographs relevant to the Thames-Coromandel area.",
        title: "Digital Archiver",
    },
    {
        company: "Brockbank Properties",
        imagePath: undefined,
        start: "Nov 2016",
        end: "Dec 2022",
        type: "Casual",
        location: "Waikato, New Zealand",
        tasks: "Installing electric fencing, building frames, concrete pouring, painting, and plastering. Occasional leadings of small teams. Full-time during summers, part-time during school.",
        title: "Plasterer, Labourer",
    }

]

export { Experience, experiences };
