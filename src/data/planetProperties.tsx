import * as THREE from 'three';
import About from '../sections/About';
import Experience from '../sections/Experience';

export const planetProperties = [

    {
        name: "planetAbout",
        title: "About",
        scale: new THREE.Vector3(0.005, 0.005, 0.005),
        position: new THREE.Vector3(-5, 2, -3),
        content: <About />
    },

    {
        name: "planetExperience",
        title: "Experience",
        scale: new THREE.Vector3(1, 1, 1),
        position: new THREE.Vector3(2, -0.5, -5),
        content: <Experience />
    },
    {
        name: "planetEducation",
        title: "Education",
        scale: new THREE.Vector3(0.005, 0.005, 0.005),
        position: new THREE.Vector3(4, 4, -8),
        // content: <Education />

    },
    // {
    //     name: "planetSun",
    //     title: "Sun",
    //     scale: new THREE.Vector3(2, 2, 2),
    //     position: new THREE.Vector3(0, 0, 22),
    // },

]