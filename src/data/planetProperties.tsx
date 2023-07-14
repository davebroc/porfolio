import * as THREE from 'three';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Education from '../sections/Education';

export class Planet {
    name: string;
    title: string;
    scale: THREE.Vector3;
    position: THREE.Vector3;
    content: JSX.Element | null;

    constructor(name: string, title: string, scale: THREE.Vector3, position: THREE.Vector3, content: JSX.Element | null) {
        this.name = name;
        this.title = title;
        this.scale = scale;
        this.position = position;
        this.content = content;
    }
}

const planetAbout = new Planet(
    "planetAbout",
    "About",
    new THREE.Vector3(0.005, 0.005, 0.005),
    new THREE.Vector3(-5, 2, -3),
    <About />
);

const planetExperience = new Planet(
    "planetExperience",
    "Experience",
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(12, -0.5, -15),
    <Experience />
);

const planetEducation = new Planet(
    "planetEducation",
    "Education",
    new THREE.Vector3(0.005, 0.005, 0.005),
    new THREE.Vector3(4, 4, -8),
    <Education />
);

const planetProjects = new Planet(
    "planetProjects",
    "Projects",
    new THREE.Vector3(0.005, 0.005, 0.005),
    new THREE.Vector3(-10, -2, -20),
    <Projects />
);

export const planetProperties: Planet[] = [planetAbout, planetExperience, planetEducation, planetProjects];
