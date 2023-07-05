import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import loadObject from './util/loadObject';

async function addObject(scene: THREE.Scene, name: string) {
    const path = "./src/assets/"
    const object = await loadObject(path + name + ".obj", path + name + ".mtl");
    object.name = name

    if (object !== undefined)
        scene.add(object);
    return object
}

const ThreeScene: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // Create the scene
        const scene = new THREE.Scene();

        // Create the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create the renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Add the renderer's canvas element to the DOM
        if (sceneRef.current)
            sceneRef.current.appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xFFFFFF);
        scene.add(light);


        const computer = addObject(scene, "computer");

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);

            computer.then(obj => obj.rotation.x += 0.01)

            renderer.render(scene, camera);
        };

        animate();
    }, []);


    return <div ref={sceneRef}></div>;
};

export default ThreeScene;
