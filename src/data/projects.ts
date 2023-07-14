class Project {
    title: string;
    imgURL: string;
    skills: string[];
    live?: string;
    repo?: string;
    description: string;

    constructor(
        title: string,
        imgURL: string,
        skills: string[],
        description: string,
        live?: string,
        repo?: string
    ) {
        this.title = title;
        this.imgURL = imgURL;
        this.skills = skills;
        this.live = live;
        this.repo = repo;
        this.description = description;
    }
}

const projects: Project[] = [
    new Project(
        'Birds of Aotearoa',
        'birds.JPG',
        ['JS', 'CSS', 'MongoDB', 'NodeJS'],
        'A static website displaying birds native to Aotearoa. Currently a Front-end application with the back-end in development.',
        'https://davebroc.github.io/Birds-of-Aotearoa',
        'https://github.com/davebroc/Birds-of-Aotearoa'
    ),
    new Project(
        'Blackjack',
        'blackjack.JPG',
        ['React', 'JS', 'CSS'],
        'A basic game of Blackjack built using React. Betting, rule customization, and user training are under development.',
        'https://davebroc.github.io/Blackjack/',
        'https://github.com/davebroc/Blackjack'
    ),
    new Project(
        'ANDIE',
        'ANDIE.JPG',
        ['Java'],
        'A Non-Destructive Image Editor (ANDIE). Built as a university group project with four other students. Features include blurring, cropping, rotating, and color alterations.',
        undefined,
        undefined
    ),
    new Project(
        'GotoGrow PWA',
        'gotogrow.JPG',
        ['React', 'Tailwind', 'PWA'],
        'PWA built at Iris Data Science. User-friendly with heavy offline capabilities to allow farmers to make entries while being offline in their fields.'
    ),
];

export { projects, Project };
