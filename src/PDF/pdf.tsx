import { educations } from "../data/educations";
import { experiences } from "../data/experiences";

export default function createPDF() {

    // Write data to file
    try {
        // Data to be written to the file
        var output = `\\documentclass[lighthipster]{simplehipstercv}
    % available options are: darkhipster, lighthipster, pastel, allblack, grey, verylight, withoutsidebar
    % withoutsidebar
    \\usepackage[utf8]{inputenc}
    \\usepackage[default]{raleway}
    \\usepackage[margin=3cm, a4paper]{geometry}
    \\usepackage{xcolor}
    \\hypersetup{
        colorlinks,
        linkcolor={red!50!black},
        citecolor={blue!50!black},
        urlcolor={blue!80!black}
    }
    \\title{CV}
    \\author{\\LaTeX{} Ninja}
    \\date{2024}
    \\pagestyle{empty}
    \\begin{document}
    
    
    \\thispagestyle{empty}
    \\simpleheader{headercolour}{David}{Brockbank}{Software Engineer}{white}
    \\vspace{5em}
    \\small
    
    \\begin{minipage}[t]{1\\textwidth}
    \\section*{About}
    Enjoyer of collaborative problem solving.\\\\
    Professional front-end, consulting, and tutoring experience.\\\\
    CAD and electronic hobbyist.
    \\end{minipage}    
    \\bigskip

    \\begin{minipage}[t]{1\\textwidth}
    \\section*{Experience}
    ${experiences.map(experience => `
    \\textbf{${experience.title}}\\\\
    \\textbf{${experience.company}}\\\\
    ${experience.tasks.replace('#', "\\#")}\\\\
    ` ).join("")}  
    \\end{minipage}    
    \\bigskip
    
    \\begin{minipage}[t]{1\\textwidth}
    \\section*{Education}
    ${educations.map(education => `
    \\textbf{${education.qualification}}\\\\
    \\textbf{${education.provider}}\\\\
    ${education.majorMinor}\\\\
    GPA: ${education.gpa}\\\\
    ` )}
    \\end{minipage}
    \\bigskip
    
    \\begin{minipage}[t]{1\\textwidth}
    \\section*{Awards}
    Stephen Bowater Memorial Scholarship\\\\
    University of Otago 150th Entrance Scholarship\\\\
    University of Otago Scholarship in Science
    \\bigskip
    
    \\end{minipage}\\hfill
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
\\setlength{\\parindent}{0pt}

\\begin{minipage}[t]{1\\textwidth}
\\fontfamily{\\sfdefault}\\selectfont \\color{black!70}
{\\begin{center}\\small 
    \\href{mailto:davbrockbank@gmail.com}{\\icon{\\faEnvelopeO}{cvgreen}{} davbrockbank@gmail.com}  
    \\href{tel:021493283}{\\icon{\\faPhone}{cvgreen}{} (+64) 21493283}  
 \\end{center}
\\begin{center}
    \\href{https://davebroc.github.io/}{\\icon{\\faGlobe}{cvgreen}{}davebroc.github.io/}
    \\href{https://www.linkedin.com/in/david-brockbank/}{\\icon{\\faLinkedin}{cvgreen}{}linkedin.com/in/david-brockbank/}
\\end{center}
}
\\end{minipage}

\\end{document}


`;

        // Create a Blob with the output
        const blob = new Blob([output], { type: 'text/plain' });

        // Create a URL for the Blob
        const blobUrl = URL.createObjectURL(blob);

        // Function to handle download
        const handleDownload = () => {
            // Create a link element
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'David_Brockbank_CV.tex'; // Set the file name
            document.body.appendChild(link);

            // Trigger a click event on the link to start the download
            link.click();

            // Clean up
            document.body.removeChild(link);
        };
        return (<>
            <button onClick={handleDownload}>Download LaTeX</button>
        </>)
    } catch (error) {
        console.error('Error writing to file:', error);
    }

    return (<></>)

}

