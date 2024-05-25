class Education {
    public provider: string;
    public qualification: string;
    public majorMinor: string;
    public gpa: string;
    public transcriptPath: string;
    public degreePath: string;
    public imagePath: string;

    constructor(
        provider: string,
        qualification: string,
        majorMinor: string,
        gpa: string,
        transcriptPath: string,
        degreePath: string,
        imagePath: string
    ) {
        this.provider = provider;
        this.qualification = qualification;
        this.majorMinor = majorMinor;
        this.gpa = gpa;
        this.transcriptPath = transcriptPath;
        this.degreePath = degreePath;
        this.imagePath = imagePath;
    }
}

const educations: Education[] = [
    new Education(
        "University of Otago",
        "Bachelor of Science",
        "Major in Computer Science, Minor in Energy Management",
        "8.3/9.0 (A)",
        "/files/otago-transcript.pdf",
        "/files/BSc.pdf",
        "/otago.jpg",
    ),
];

export { Education, educations };
