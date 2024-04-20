import EducationItem from "../components/EducationItem";
import { educations } from "../data/educations";
import { experiences } from "../data/experiences";
import Education from "../sections/Education";



export default function createPDF() {
    
// Write data to file
try {
    // Data to be written to the file
    var output = `\\documentclass[lighthipster]{simplehipstercv}
    % available options are: darkhipster, lighthipster, pastel, allblack, grey, verylight, withoutsidebar
    % withoutsidebar
    \\usepackage[utf8]{inputenc}
    \\usepackage[default]{raleway}
    \\usepackage[margin=1cm, a4paper]{geometry}
    
    %------------------------------------------------------------------ Variablen
    
    \\newlength{\\rightcolwidth}
    \\newlength{\\leftcolwidth}
    \\setlength{\\leftcolwidth}{0.23\\textwidth}
    \\setlength{\\rightcolwidth}{0.75\\textwidth}
    
    %------------------------------------------------------------------
    \\title{New Simple CV}
    \\author{\\LaTeX{} Ninja}
    \\date{June 2019}
    
    \\pagestyle{empty}
    \\begin{document}
    
    
    \\thispagestyle{empty}
    \\section*{Start}
    
    \\simpleheader{headercolour}{David}{Brockbank}{Software Engineer}{white}
    
    
    % this has to be here so the paracols starts..
    \\subsection*{}
    \\vspace{4em}
    
    \\setlength{\\columnsep}{1.5cm}
    \\columnratio{0.23}[0.75]
    \\begin{paracol}{2}
    \\hbadness5000
    %\\backgroundcolor{c[1]}[rgb]{1,1,0.8} % cream yellow for column-1 %\\backgroundcolor{g}[rgb]{0.8,1,1} % \\backgroundcolor{l}[rgb]{0,0,0.7} % dark blue for left margin
    
    \\paracolbackgroundoptions
    
    % 0.9,0.9,0.9 -- 0.8,0.8,0.8
    
    
    \\footnotesize
    {\\setasidefontcolour
    \\flushright
    \\begin{center}
    \\end{center}
    
    \\bg{cvgreen}{white}{About me}\\\\[0.5em]
    
    {\\footnotesize
Software Engineer who enjoys collaboration, problem solving, and making things.
}
    
    \\bigskip
    
    \\bg{cvgreen}{white}{Interests}\\\\[0.5em]
    Training in the gym,
    video games, 
    socializing, 
    snowboarding, 
    tramping, 
    physics,
    and 
    space
    \\bigskip

    \\bg{cvgreen}{white}{Porfolio}\\\\[0.5em]
    \\href{https://davebroc.github.io/}{https://davebroc.github.io/}

  
    \\phantom{turn the page}
    
    \\phantom{turn the page}
    }
    %-----------------------------------------------------------
    \\switchcolumn
    
    \\small

     \\begin{minipage}[t]{0.7\\textwidth}
    \\section*{Experience}
    ${experiences.map(experience => `
    \\textbf{${experience.company}}\\\\
    \\textbf{${experience.title}}\\\\
    ${experience.tasks}\\\\
    ` ).join("")}  
    \\end{minipage}    
    
    \\bigskip
    
    \\begin{minipage}[t]{0.7\\textwidth}
    
    \\section*{Education}
    ${educations.map(education => `
    \\textbf{${education.provider}}
    \\textbf{${education.qualification}}\\\\
    ${education.majorMinor}\\\\
    GPA: ${education.gpa}\\\\
    ` )}
    \\end{minipage}
      
    \\bigskip
    
    \\begin{minipage}[t]{0.7\\textwidth}
    \\section*{Awards}
    University of Otago 150th Entrance Scholarship\\\\
    Stephen Bowater Memorial Scholarship
    \\bigskip
    
  
    
    \\end{minipage}\\hfill
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
    \\bigskip
\\setlength{\\parindent}{0pt}
\\begin{minipage}[t]{\\rightcolwidth}
\\begin{center}\\fontfamily{\\sfdefault}\\selectfont \\color{black!70}
{\\small David Brockbank\\icon{\\faEnvelopeO}{cvgreen}{} davebrockbank02@gmail.com  \\icon{\\faPhone}{cvgreen}{} (+64) 21493283 \\newline\\icon{\\faAt}{cvgreen}{} \\protect\\url{https://davebroc.github.io/}
}
\\end{center}
\\end{minipage}


    
    \\end{paracol}
    
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
    return(<>
            <button onClick={handleDownload}>Download LaTeX</button>
    </>)
} catch (error) {
    console.error('Error writing to file:', error);
}

return(<></>)

}

